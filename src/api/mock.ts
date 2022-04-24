import request from '@/service'
import type { IMockLoginRes } from './types'
export type { IMockLoginRes } from './types'
export const testMock = (data: any) => {
  return request<any, IMockLoginRes>({
    url: '/mock/login',
    method: 'post',
    data,
  })
}
export const getUserList = (data: any) => {
  return request<any, IMockLoginRes>({
    url: '/mock/getUserList',
    method: 'get',
    data,
  })
}
export const getRoleList = (data: any) => {
  return request<any, IMockLoginRes>({
    url: '/mock/getRoleList',
    method: 'get',
    data,
  })
}
export const getPermissionList = (data: any) => {
  return request<any, IMockLoginRes>({
    url: '/mock/getPermissionList',
    method: 'get',
    data,
  })
}
export const getUserDetail = (data: any) => {
  return request<any, IMockLoginRes>({
    url: '/mock/getUserDetail',
    method: 'get',
    data,
  })
}
