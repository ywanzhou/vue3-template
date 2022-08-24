<template>
  <div>
    <div ref="myRef" :style="{ width: '100%', height: props.height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, markRaw } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {}
    },
  },
  height: {
    type: String,
    default: () => {
      return '300px'
    },
  },
})
const myRef = ref<HTMLElement>()
const chart = ref<any>()
onMounted(() => {
  setTimeout(() => {
    // 初始化echarts实例
    chart.value = markRaw(echarts.init(myRef.value as HTMLElement))
    drawChart()
  }, 500)
})
// 绘制折线图
const drawChart = () => {
  // 父组件传来的实例参数
  chart.value && chart.value.setOption(props.option)
}
window.addEventListener('resize', () => {
  //页面大小变化后Echarts也更改大小
  chart.value.resize()
})
watch(
  () => props.option,
  () => {
    drawChart()
  },
)
</script>
