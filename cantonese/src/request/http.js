// 在http.js中引入axios
import axios from 'axios'; // 引入axios
//因为axios默认发的是json格式数据，我们要做表单提交，需要更改axios配置
// 引入 Qs是为了把json格式，转为formdata 的数据格式
import Qs from 'qs'
import router from '../router'
import { Message } from 'element-ui'
const request = axios.create({
    baseURL: 'http://192.168.123.96:8080/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded',"token":sessionStorage.getItem("token") },
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        // data.token = sessionStorage.getItem("token")
        return Qs.stringify(data);
    }],
});

// 响应拦截器
request.interceptors.response.use(response => {
    let code = response.data.code
    switch (code) {
        case 401:
            localStorage.removeItem('token');
            sessionStorage.removeItem('token')
            Message.error('登录已过期, 请重新登录')
            router.replace({  //替换当前的页面
                path: '/signIn',
                //登录成功后跳入浏览的当前页面
                //router.currentRoute:当前的路由信息对象，
                // 可以通过router.currentRoute.fullPath获得解析后的 URL，包含查询参数和 hash 的完整路径
                query: { redirect: router.currentRoute.fullPath }
            })
            break
        case 411:
            Message.error(response.data.msg)
    }
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            // 返回401，清除token信息并跳转到登录页面
            case 401:
                localStorage.removeItem('token');
                Message.error('登录已过期, 请重新登录')
                router.replace({
                    path: '/login',
                    //登录成功后跳入浏览的当前页面
                    query: { redirect: router.currentRoute.fullPath }
                })
                break
            case 411:
                Message.error('您当前的权限不足, 操作失败')
        }
        // 返回接口返回的错误信息
        return Promise.reject(error.response.data);
    }
});

export default request