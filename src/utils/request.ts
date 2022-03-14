import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

interface RequestInterceptors {
  // 请求拦截
  requestInterceptors: (config: AxiosRequestConfig) => AxiosRequestConfig
  // 响应拦截
  responseInterceptors: (config: AxiosRequestConfig) => AxiosRequestConfig
}
// 自定义传入的参数
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}

class Request {
  // axios 实例
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then(res => {
      console.log(res)
    })
  }
}

export default Request
