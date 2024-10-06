import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const read = () =>{
    return axios.get(baseUrl)
}
const create = newPerson =>{
    return axios.post(baseUrl,newPerson)
}
const update = (id, nameObject) =>{
    return axios.put(`${baseUrl}/${id}`, nameObject)
}

const deleter = (id) =>{
    return axios.delete(`${baseUrl}/${id}`)
}   

export default {read, create, update, deleter}