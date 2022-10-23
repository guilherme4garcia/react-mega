import React, { useEffect, useState, useCallback } from 'react'
import request from '../services/request'

function Resultado() {
    const fetch = useCallback(
        async() => {
          const req = await request()
          setData(req.data)
        },
        [],
    )
    useEffect(() => {
      fetch()

    }, [])     
      
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>({})
    console.log(data)

  return (
    <div>
        {data.nome}
        {data.numero_concurso}
    </div>
  )
}

export default Resultado