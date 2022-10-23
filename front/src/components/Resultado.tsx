import React, { useEffect, useState, useCallback } from 'react'
import {request, randomIntFromInterval} from '../services/request'
import { Circles } from 'react-loader-spinner'
import formatTime from '../services/formatTime'
import isEven from '../services/isEven'

function Resultado() {

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const num_sorteio = randomIntFromInterval(1, 2529)
      const response = await request(num_sorteio)
      const {data} = response
      setNome(data.nome)
      setNumero(data.numero_concurso)
      setDezenas(data.dezenas)
      setDate(formatTime(data.data_concurso))
      setNextDate(formatTime(data.data_proximo_concurso))
      setLocal(data.local_realizacao)
      const valor_premio = (data.valor_estimado_proximo_concurso).toLocaleString('en-US',{
        style: 'currency',
        currency: 'BRL'
      })
      setPremio(valor_premio)
      setLoading(false)
    }
    return () => {
      fetchData()
      
    }
  }, [])
      
  const [loading, setLoading] = useState<boolean>(false)
  const [nome, setNome] = useState<string>()
  const [numero, setNumero] = useState<number>()
  const [dezenas, setDezenas] = useState<string[]>([''])
  const [local, setLocal] = useState<string>('')
  const [premio, setPremio] = useState<string>()
  const [date, setDate] = useState<string>()
  const [nextDate, setNextDate] = useState<string>()
  console.log(premio)

  if(loading){
    return(
      <>
        <div className='center'>
          <h1 className='resultado'>Carregando</h1>
          <Circles color='#5eb5f2'/>
        </div>
      </>
    )
  }
  return (
    
    <section className='center'>
        <div className='container'>
          <h1>{nome}</h1>
          <div className='child'>
            
            <h1 className='resultado'>Resultado</h1>
            <h2>Concurso: {numero}</h2>
            <h3 className='date'>{date}</h3>
          </div>
          <div>
            {local? <h1>Sorteio realizado em: {local}</h1>: ''}
            
          </div>
          <div className='dezenas-container'>
            <p className='dezenas'>{dezenas[0]}</p>
            <p className='dezenas'>{dezenas[1]}</p>
            <p className='dezenas'>{dezenas[2]}</p>
            <p className='dezenas'>{dezenas[3]}</p>
            <p className='dezenas'>{dezenas[4]}</p>
            <p className='dezenas'>{dezenas[5]}</p>
          </div>
          <div>
            <h1>Estimativa de prêmio do próximo concurso:</h1>
            <h3 className='date'>{nextDate}</h3>
            
            <h1 className='resultado'>{premio}</h1>
          </div>
         
        </div>
        
    </section>
  )
}

export default Resultado