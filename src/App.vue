<template>
  <el-button type="primary" size="small" @click="open">测试</el-button>

  <router-view></router-view>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
const open = () => {
  ElMessage({ message: '测试' })
}
</script>

<style></style>
