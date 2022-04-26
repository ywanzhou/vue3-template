<script setup lang="ts">
import { useUserStore } from '/@/store'
const store = useUserStore()
const curUser = computed(() => store.userDetail)
const userList = computed(() => store.userList)
const radio = ref(store.curId)
const handleChange = () => {
  store.changeId(radio.value)
}
</script>

<template>
  <div class="flex items-center">
    <span class="mr-2">切换用户</span>
    <el-radio-group v-model="radio" size="small" @change="handleChange">
      <el-radio-button
        v-for="user in userList"
        :key="user.id"
        :label="user.id"
        >{{ user.name }}</el-radio-button
      >
    </el-radio-group>
  </div>
  <div class="mt-4">
    {{ '当前用户：' + curUser?.name }}<br />
    {{ '当前权限：' + curUser?.role.name }}
  </div>
</template>

<style scoped></style>
