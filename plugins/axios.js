import { message } from './antd-ui'
import { getToken } from '~/utils/cookie'
export default function (app) {
    const axios = app.$axios
    // 基本配置
    axios.defaults.timeout = 10000
    axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'

    // 请求回调设置token
    axios.onRequest((config) => {
        const token = getToken()
        if(token) config.headers.Authorization = token
    })

    // 响应回调
    axios.onResponse((response) => {
        switch(response.status) {
            case 200:
                return Promise.resolve(response.data)
            case 401:
                message.error('请登录后再操作')
                break
            default:
                return Promise.reject(response.data)
        }
    })
}
