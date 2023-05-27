import axios, { AxiosRequestConfig } from "axios"

interface ResponseResult<T>{
    code: number
    msg: string
    file?: string
    line?: string | number
    data?: T
}

export default class Axios{
    private instance
    
    // 构造函数
    constructor(config:AxiosRequestConfig){
        axios.defaults.withCredentials = true
        this.instance = axios.create(config)
        this.interceptors()
    }

    public async request<T,D=ResponseResult<T>>(config:AxiosRequestConfig){
        return await this.instance.request<D>(config)
    }

    // 拦截器
    private interceptors(){
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    // 请求拦截
    private interceptorsRequest(){
        this.instance.interceptors.request.use(
            config => {
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )
    }

    // 响应拦截
    private interceptorsResponse(){
        this.instance.interceptors.response.use(
            response => {
                return response
            },
            error => {
                return Promise.reject(error)
            }
        )
    }
}