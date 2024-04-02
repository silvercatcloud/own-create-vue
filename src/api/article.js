import request from '@/utils/request'
export const artGetListService = (params) =>
  request.get('/my/article/list', { params })
//添加文章功能
export const artPublishService = (data) =>
  request.post('/my/article/add', data)
//获取文章详情
export const artGetDetailService = (id) =>
  request.get('my/article/info', { params: { id } })
//删除文章
export const artDelService = (id) => request.delete('my/article/info', { params: { id } })
