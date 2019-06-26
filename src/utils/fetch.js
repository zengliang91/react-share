import axios from 'axios';

// 创建axios实例
const service = axios.create({

  timeout: 30000, // 请求超时时间
  headers: {'Cache-Control': 'no-cache', 'Pragma': 'no-cache'}
});

//添加请求拦截器
service.interceptors.request.use(request => {
  return request
}, error => {//请求错误时做些事
  return Promise.reject(error)
})

//拦截返回的数据res,通过返回值直接获取到服务器的数据
service.interceptors.response.use(response => {
    const res = response.data
   
  	if (res.code === 200) {
      return res
    } else if (res.code == 401) {//登录失效
      window.location.href = '/login'
    } else {
      return res
    }
  },
  error => {   
    return Promise.reject(error);
  }
)
//封装多个请求
export function sendAll(fnArray) {
  return Promise.all(fnArray)
}

export default service;
