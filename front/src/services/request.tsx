import axios from "axios"


async function request(num: number) {
    
    const url :string = `https://apiloterias.com.br/app/resultado?loteria=megasena&token=AXfzBXx9JaidF7J&concurso=${num}`
    const data = await axios.get(url)
    return data

}


function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export { request, randomIntFromInterval}