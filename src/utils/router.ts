// 处理动态路由
/**
 * 1. 获取所有路由配置文件
 * 2. 根据 menuList 动态生成 Route
 */
import type { RouteRecordRaw } from 'vue-router'

// 获取所有路由配置文件的函数
const getMainRouteFileList = async () => {
  const allRoutes: RouteRecordRaw[] = []
  // import.meta.glob 批量导入文件
  const routeFileList = import.meta.glob('../router/main/**')
  for (const path in routeFileList) {
    const mod = await routeFileList[path]()
    allRoutes.push(mod.default)
  }
  return allRoutes
}

// 递归获取Route
const recurseGetRoute = (menus: any[], allRoutes: any[], route: any[]) => {
  // 遍历传递的菜单
  for (const menu of menus) {
    // 如果没有children属性，则将该项直接push到route中
    if (!menu.children) {
      // 找到对应的路由配置文件
      const r = allRoutes.find(
        (route: any) => route.path === '/main' + menu.path,
      )
      // 如果找到匹配的则进行添加
      r && route.push(r)
    } else {
      recurseGetRoute(menu.children, allRoutes, route)
    }
  }
}
// 根据菜单生成路由
export const menuToRoutes = (userMenu: any[]): Promise<RouteRecordRaw[]> => {
  return new Promise(resolve => {
    const routes: RouteRecordRaw[] = []

    getMainRouteFileList().then(res => {
      // 1. 获取所有的routes
      const allRoutes: RouteRecordRaw[] = res
      // 2. 配置该权限的routes
      recurseGetRoute(userMenu, allRoutes, routes)

      resolve(routes)
    })
  })
}
