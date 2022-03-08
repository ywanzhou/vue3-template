<!--
 * @description: 登录卡片
 * @author: ywanzhou
 * @Date: 2022-03-06 11:35
 * @LastEditTime: 2022-03-06 18:44
 * @LastEditors: ywanzhou
 * @FilePath: \Learn-front-end-from-scratce:\Repository\practice-demo\learn-vue3-cms\src\views\login\components\LoginCard.vue
-->
<template>
  <el-card class="login-card h-60 w-96 md:rounded-lg" shadow="never">
    <div class="header flex justify-evenly text-lg h-10">
      <span
        class="cursor-pointer transition-all duration-300"
        :class="curTabs === 'login' ? 'font-semibold text-blue-500' : ''"
        @click="curTabs = 'login'"
        >密码登录</span
      >
      <span
        class="cursor-pointer transition-all duration-300"
        :class="curTabs === 'register' ? 'font-semibold text-blue-500' : ''"
        @click="curTabs = 'register'"
        >验证码登录</span
      >
    </div>
    <div class="main">
      <el-form
        v-if="curTabs === 'login'"
        ref="formRef"
        :model="loginForm"
        label-width="0"
      >
        <TransitionGroup
          appear
          mode="out-in"
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <el-form-item v-if="curTabs === 'login'" class="mt-2" :data-delay="1">
            <el-input v-model="loginForm.username" placeholder="请输入用户名">
              <template #prepend>
                <span class="w-11 text-center inline-block">用户名</span>
              </template>
            </el-input></el-form-item
          >

          <el-form-item v-if="curTabs === 'login'" :data-delay="2">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入密码"
              type="password"
            >
              <template #prepend>
                <span class="w-11 text-center inline-block"
                  >密码</span
                ></template
              >
            </el-input>
          </el-form-item>
          <el-form-item v-if="curTabs === 'login'" :data-delay="3">
            <el-button type="primary" class="w-full" size="default"
              >登录</el-button
            >
          </el-form-item>
        </TransitionGroup>
      </el-form>
      <el-form v-else ref="formRef" :model="loginForm" label-width="0">
        <TransitionGroup
          appear
          mode="out-in"
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <el-form-item
            v-if="curTabs === 'register'"
            class="mt-2"
            :data-delay="1"
          >
            <el-input v-model="loginForm.phone" placeholder="请输入手机号">
              <template #prepend>
                <span class="w-11 text-center inline-block">手机号</span>
              </template>
            </el-input></el-form-item
          >

          <el-form-item v-if="curTabs === 'register'" :data-delay="2">
            <el-input
              v-model="loginForm.code"
              class="w-60"
              placeholder="请输入验证码"
              type="password"
            >
              <template #prepend>
                <span class="w-11 text-center inline-block"
                  >验证码</span
                ></template
              >
            </el-input>
            <el-button type="primary" size="default">发送验证码</el-button>
          </el-form-item>
          <el-form-item v-if="curTabs === 'register'" :data-delay="3">
            <el-button type="primary" class="w-full" size="default"
              >登录</el-button
            >
          </el-form-item>
        </TransitionGroup>
      </el-form>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import gsap from 'gsap'

const curTabs = ref<string>('login')
const loginForm = reactive({
  username: '',
  password: '',
  phone: '',
  code: '',
})
const beforeEnter = (el: any) => {
  el.style.opacity = 0
  el.style.position = 'relative'
  el.style.bottom = '-200px'
}
const enter = (el: any, done: (...args: any[]) => void) => {
  gsap.to(el, {
    opacity: 1,
    bottom: 0,
    delay: el.dataset.delay * 0.05,
    onComplete: done,
  })
}
const leave = (el: any, done: (...args: any[]) => void) => {
  gsap.to(el, {
    opacity: 0,
    top: 200,
    delay: 0,
    onComplete: done,
  })
}
</script>
<style scoped>
.el-input.w-60 {
  width: 240px;
}
</style>
