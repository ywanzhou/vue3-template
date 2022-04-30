interface IUserRole {
  roleId: number
  name: string
}
interface PermissionList extends IPermissionList {
  children: IPermissionList[]
}
export interface IUserList {
  id: number
  name: string
  role: IUserRole
  createTime: string
  updateTime: string
}
export interface IPermissionList {
  id: number
  name: string
  type: number
  pid?: number
  path: string
}
export interface IRoleList {
  id: number
  name: string
  permission: number[]
  permissionNames: string[]
  createTime: string
  updateTime: string
}
export interface IUserDetail extends IUserList {
  // 权限列表
  permissionList: PermissionList[]
}
