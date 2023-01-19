import axios from 'axios'

const instance = axios.create({
    baseURL :  'https://api-fxpractice.oanda.com',
    headers : {
        "Content-Type": "application/json",
        "Authorization": "Bearer 32cd6e9c938cebaebd432bc4e159c89a-cc978615208267981f4aa3c1eda55d88"
        
       }
       
})

export default instance