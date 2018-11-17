import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'
import isInteger from 'lodash/isInteger'

// 获取列表
export function list (params) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取信息
export function info (id) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/info' + (isInteger(id) ? `/${id}` : '')),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 添加
export function add (params) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/save'),
    method: 'post',
    data: requestParam(params)
  })
}

// 修改
export function update (params) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/update'),
    method: 'post',
    data: requestParam(params)
  })
}

// 删除
export function del (params) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/delete'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 拉取用户在线信息
export function livenumbers (params) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/livenumbers'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 拉取用户在线总信息
export function sumlivenumbers (params) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/sumlivenumbers'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 拉取子公司数据
export function companylivenumbers (params) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/companylivenumbers'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}


// 拉取总公司数据
export function alllivenumbers (params) {
  return request({
    url: requestUrl('/generator/dmslivenumbers/alllivenumbers'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}
