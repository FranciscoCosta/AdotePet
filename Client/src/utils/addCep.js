import axios from "axios";

const addCep =(cep) => {
    return axios.get(`https://brasilapi.com.br/api/${cep}/v1/60130240`)
}

export default addCep;