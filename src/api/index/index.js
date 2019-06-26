import fetch from '../../utils/fetch';

//菜单查询
export function getMenulist(form) {
  return fetch({
    url:'/base/manage/user/menus',
    method: 'get'
  })
}
//api列表查询
export function getApiList(form) {
  return fetch({
    url:'/base/manage/third/party/api/list',
    method: 'post',
    data: form
  })
}