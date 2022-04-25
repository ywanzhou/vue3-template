export const userList = [
  {
    id: 0,
    name: '一碗周',
    role: {
      roleId: 0,
      name: 'superAdmin',
    },
    createTime: '2022-05-05',
    updateTime: '2022-05-05',
  },
  {
    id: 1,
    name: '臭小甜',
    role: {
      roleId: 1,
      name: 'admin',
    },
    createTime: '2022-05-05',
    updateTime: '2022-05-05',
  },
  {
    id: 2,
    name: '笨小贝',
    role: {
      roleId: 2,
      name: 'user',
    },
    createTime: '2022-05-05',
    updateTime: '2022-05-05',
  },
]
export const roleList = [
  {
    id: 0,
    name: 'superAdmin',
    // 权限列表的id
    permission: [0, 1, 2, 4, 5, 6, 7],
    permissionNames: [],
    createTime: '2022-05-05',
    updateTime: '2022-05-05',
  },
  {
    id: 1,
    name: 'admin',
    // 权限列表的id
    permission: [0, 1, 2, 4, 5],
    permissionNames: [],
    createTime: '2022-05-05',
    updateTime: '2022-05-05',
  },
  {
    id: 2,
    name: 'user',
    // 权限列表的id
    permission: [0, 1, 4],
    permissionNames: [],
    createTime: '2022-05-05',
    updateTime: '2022-05-05',
  },
]
export const permissionList = [
  {
    id: 0,
    name: '工作台',
    type: 0,
    pid: null,
    path: '/dashboard/workplace',
  },
  {
    id: 1,
    name: '数据可视化',
    type: 0,
    pid: null,
    path: '/visualization',
  },
  {
    id: 2,
    name: '系统管理',
    type: 0,
    pid: null,
    path: '/system',
  },
  {
    id: 4,
    name: 'ECharts图表',
    type: 1,
    pid: 1,
    path: '/visualization/echarts',
  },
  {
    id: 5,
    name: '用户管理',
    type: 1,
    pid: 2,
    path: '/system/user',
  },
  {
    id: 6,
    name: '角色管理',
    type: 1,
    pid: 2,
    path: '/system/role',
  },
  {
    id: 7,
    name: '权限管理',
    type: 1,
    pid: 2,
    path: '/system/permission',
  },
]
