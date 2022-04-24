import request from '@/service'
import type { IGetParams, IGetRes } from './types'
export type { IGetParams, IGetRes } from './types'
export const getAddrs = (data: IGetParams) => {
  return request<IGetParams, IGetRes>({
    url: '/api/common/postcode/getAddrs',
    method: 'GET',
    data,
  })
}
