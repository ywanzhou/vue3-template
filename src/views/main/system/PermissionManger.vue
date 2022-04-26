<script setup lang="ts">
import { useUserStore } from '/@/store'
import YwzTable from '/@/components/ywz-table'
import { ITableCol } from '/@/components/ywz-table/types'
const store = useUserStore()
const permissionList = computed(() => store.permissionList)
const columns: ITableCol[] = [
  { label: '标题', prop: 'name' },
  { label: '类型', prop: 'type', slotName: 'type' },
  { label: '路径', prop: 'path' },
]
</script>

<template>
  <YwzTable :table-data="permissionList" :columns-list="columns">
    <template #type="scoped">
      <el-tag type="success">
        {{ scoped.row.type === 0 ? '跟路由' : '二级路由' }}
      </el-tag>
    </template>
  </YwzTable>
</template>

<style scoped></style>
