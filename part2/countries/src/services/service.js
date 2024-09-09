import axios from "axios"
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const retrive = (name) =>{
    return axios.get(`${baseUrl}`)
}

export default {retrive}