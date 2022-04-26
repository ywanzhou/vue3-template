<script lang="ts" setup>
import { useUserStore } from '/@/store'
const activeIndex = computed(() => {
  return useRoute().path
})
const menuList = computed(() => {
  return useUserStore().menuList
})
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    router
    mode="horizontal"
  >
    <template v-for="menu in menuList" :key="menu.id">
      <!-- 没有子路由的情况 -->
      <el-menu-item v-if="!menu.children" :index="'/main' + menu.path">
        <span>{{ menu.name }}</span>
      </el-menu-item>

      <!-- 存在子路由的情况 -->
      <el-sub-menu v-else :index="'/main' + menu.path">
        <template #title>{{ menu.name }}</template>
        <el-menu-item
          v-for="_menu in menu.children"
          :key="_menu.id"
          :index="'/main' + _menu.path"
          >{{ _menu.name }}</el-menu-item
        >
      </el-sub-menu>
    </template>
  </el-menu>
</template>
