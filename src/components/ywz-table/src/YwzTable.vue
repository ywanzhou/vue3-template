<script setup lang="ts">
import { useAttrs } from 'vue'
import type { ITableCol } from './../types'
interface Props {
  tableData: any[] | undefined
  columnsList: ITableCol[]
}
const props = defineProps<Props>()
// 接收ElTable属性，默认绑定
const attrs = useAttrs()
</script>

<template>
  <div class="ywz-table">
    <el-table :data="props.tableData" v-bind="attrs">
      <template
        v-for="(column, index) in props.columnsList"
        :key="column.prop || index"
      >
        <el-table-column
          v-if="column.type"
          v-bind="Object.assign(column, column.itemAttr)"
        >
        </el-table-column>
        <el-table-column v-else v-bind="Object.assign(column, column.itemAttr)">
          <template #default="scope">
            <slot :name="column.slotName" :row="scope.row">{{
              column.prop && scope.row[column.prop]
            }}</slot></template
          >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<style scoped></style>
