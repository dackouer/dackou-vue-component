import Axios from "./Axios"

const Authorization:any = localStorage.getItem('token')
const token:any = localStorage.getItem('visitorid')

const http = new Axios({
    baseURL: '/api/',
    timeout: 100000,
    headers: {
        Authorization,
        token,
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

export { http }