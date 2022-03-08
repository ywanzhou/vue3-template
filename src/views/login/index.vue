<!--
 * @description: 登录
 * @author: ywanzhou
 * @Date: 2022-03-06 10:40
 * @LastEditTime: 2022-03-06 13:08
 * @LastEditors: ywanzhou
 * @FilePath: \Learn-front-end-from-scratce:\Repository\practice-demo\learn-vue3-cms\src\views\login\index.vue
-->
<template>
  <div class="login h-screen w-screen">
    <el-row class="h-full">
      <el-col :span="12" class="h-full"><div>装饰</div></el-col>
      <el-col :span="12" class="h-full"
        ><div class="login-wrap h-full flex justify-center items-center">
          <LoginCard /></div
      ></el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import LoginCard from './components/LoginCard.vue'
onMounted(() => {
  console.log('on')
})
</script>
<style scoped></style>
