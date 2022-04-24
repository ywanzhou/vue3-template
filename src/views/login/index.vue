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
import LoginCard from './components/LoginCard.vue'
</script>
<style scoped></style>
