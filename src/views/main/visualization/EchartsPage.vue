<script setup lang="ts">
import JDay from '/@/components/three-line-pic/src/DMonth.vue'
// import { YwzChart, dayConfig, monthConfig } from '/@/components/three-line-pic'
// const options = dayConfig()
// const options = monthConfig()
const show = ref(true)
</script>
<template>
  <div class="EchartsPage">
    <!-- <YwzChart :option="options" height="800px" /> -->
    <JDay v-model:show="show" />
  </div>
</template>
<style scoped></style>
