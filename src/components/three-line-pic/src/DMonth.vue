<script setup lang="ts">
import { defineProps, computed, defineEmits, ref } from 'vue'
import { YwzChart, monthConfig } from '..'
interface Props {
  show: boolean
}
const props = defineProps<Props>()
const emits = defineEmits(['update:show'])

const visible = computed({
  get: () => {
    return props.show
  },
  set: val => {
    emits('update:show', val)
  },
})
const options = ref({})
type key = 'at' | 'td' | 'slp'
const list = ref([
  { value: 'at', label: '温度', unit: '°C' },
  { value: 'td', label: '露点温度', unit: '°C' },
  { value: 'slp', label: '海平面气压', unit: 'hPa' },
])
const value = ref('at')
const getConfig = async () => {
  // 替换为接口
  const res = await (await import('./mockAPi/dm')).default
  if (res.message === 'success') {
    const data = res.data
    const item = list.value.find(_ => _.value === value.value)
    console.log(item)
    const date = data[value.value as key].map(i => i.datetime)
    const min = data[value.value as key].map(i => i.min)
    const max = data[value.value as key].map(i => i.max)
    const avg = data[value.value as key].map(i => Math.round(i.avg))
    options.value = monthConfig(date, min, max, avg, item?.unit, item?.label)
  }
}
getConfig()
</script>
<template>
  <el-dialog v-model="visible" width="80%" top="2vh">
    <el-select
      v-model="value"
      class="m-2"
      placeholder="Select"
      size="small"
      @change="getConfig"
    >
      <el-option
        v-for="item in list"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <YwzChart :option="options" height="800px" />
  </el-dialog>
</template>
<style scoped></style>
