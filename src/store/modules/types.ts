import {
  IPermissionList,
  IRoleList,
  IUserDetail,
  IUserList,
} from '/@/api/types/mock'
export interface CountInterface {
  count: number
}
export interface IUser {
  userList: IUserList[]
  roleList: IRoleList[]
  permissionList: IPermissionList[]
  userDetail?: IUserDetail
  curId: number
}
