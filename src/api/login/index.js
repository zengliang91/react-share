import fetch from '../../utils/fetch';

//登录
export function login(form) {
  return fetch({
    url:'/base/manage/login',
    method: 'post',
    data: form
  })
}