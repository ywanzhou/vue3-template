import request from '/@/service'
import { useRequest } from '/@/hooks'
import type { IGetParams, IGetRes } from './types'
export const getAddrs = (data: IGetParams) => {
  return request<IGetParams, IGetRes>({
    url: '/api/common/postcode/getAddrs',
    method: 'GET',
    data,
  })
}
export const useGetAddr = (data: IGetParams) => {
  return useRequest<IGetParams>(getAddrs, data)
}
