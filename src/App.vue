<template>
  <el-button @click="get">请求</el-button>
  <el-button
    @click="cancelRequest('/api/common/weather/get15DaysWeatherByArea')"
    >取消请求</el-button
  >
  <el-button @click="cancelAllRequest">取消全部请求</el-button>
  <router-view></router-view>
</template>
<script setup lang="ts">
import request, { cancelRequest, cancelAllRequest } from './service'
import { onMounted } from 'vue'

interface Req {
  apiKey: string
  area?: string
  areaID?: string
}
interface Res {
  area: string
  areaCode: string
  areaid: string
  dayList: any[]
}
const get15DaysWeatherByArea = (data: Req) => {
  return request<Req, Res>({
    url: '/api/common/weather/get15DaysWeatherByArea',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(res) {
        return res
      },
      responseInterceptors(result) {
        return result
      },
    },
  })
}
const get = async () => {
  const res = await get15DaysWeatherByArea({
    apiKey: import.meta.env.VITE_APP_KEY,
    area: '北京市',
  })
  console.log(res.result.dayList)
}
onMounted(() => {
  get()
})
</script>

<style></style>
