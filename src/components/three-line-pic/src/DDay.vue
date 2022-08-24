<script setup lang="ts">
import { defineProps, computed, defineEmits, ref } from 'vue'
import { YwzChart, dayConfig } from '..'
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
const getConfig = async () => {
  // 替换为接口
  const res = await (await import('./mockAPi/dd')).default
  if (res.message === 'success') {
    options.value = dayConfig(
      res.data.odate.map(i => i.split('.')[0].replace(/T/, ' ')),
      res.data.at,
      res.data.td,
      res.data.slp,
    )
  }
}
getConfig()
</script>
<template>
  <el-dialog v-model="visible" width="80%" top="2vh">
    <YwzChart :option="options" height="800px" />
  </el-dialog>
</template>
<style scoped></style>
