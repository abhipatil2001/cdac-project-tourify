import axios from 'axios'
import config from '../config'


export async function register(name, email, password, phone, address){
    const body = {
        name,
        email, 
        password,
        phone,
        address
    }

 //api call
 const response = await axios.post(`${config.url}/propertyOwner/register`, body)
//read JSON data(response)
return response
}

export async function login(email, password){
    const body = {
        email,
        password
    }

//api call
 const response = await axios.post(`http://localhost:4000/propertyOwner/login`, body)

 //return data that we got from api
 //read JSON data (response)
 return response.data
}