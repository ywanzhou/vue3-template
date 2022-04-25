<script setup lang="ts">
import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <el-container>
    <el-header><MainHeader /></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped></style>
