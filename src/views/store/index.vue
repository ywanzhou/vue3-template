<template>
  <div class="index">
    <span>当前数值{{ countComputed }}</span>
    <br />
    <span>双倍数值{{ doubleCount }}</span>
    <br />
    <el-button type="primary" size="default" @click="countStore.countAdd">
      +1
    </el-button>
    <el-button type="primary" size="default" @click="countStore.countReduce">
      -1
    </el-button>
  </div>
</template>
<script setup lang="ts">
import { useCountStore } from '@/store'
import { storeToRefs } from 'pinia'
import {
  getUserList,
  getRoleList,
  getPermissionList,
  getUserDetail,
} from '@/api/mock'
const countStore = useCountStore()
// 通过计算属性实时获取数值
const countComputed = computed(() => countStore.count)
// 通过 storeToRefs api 结构
const { doubleCount } = storeToRefs(countStore)
getUserList({})
getRoleList({})
getPermissionList({})
getUserDetail({ id: 0 })
getUserDetail({ id: 1 })
</script>
<style scoped></style>
