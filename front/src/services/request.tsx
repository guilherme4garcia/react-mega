import axios from "axios"

const url :string = `https://apiloterias.com.br/app/resultado?loteria=megasena&token=AXfzBXx9JaidF7J&concurso=2530`

async function request() {
    const data = await axios.get(url)
    return data

}

export default request