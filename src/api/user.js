import request from '@/utils/request'
export const userLoginService = ({ username, password }) =>
  request.post('api/login', { username, password })

export const userGetInfoService = () => request.get('/my/userinfo')
