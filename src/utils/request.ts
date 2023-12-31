import axios from 'axios'
// @ts-ignore
import { ElMessage } from 'element-plus'

const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

request.interceptors.request.use((config) => {
    return config
})

request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    const status = error.response.status
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: '请求失败'
            })
            break;
        case 500|501|502|503|504|505:
            ElMessage({
                type: 'error',
                message: '服务器挂了'
            })
            break
        case 401:
            ElMessage({
                type: 'error',
                message: '参数有误'
            })
            break
    }
    return Promise.reject(new Error(error.message))
})

export default request