<script setup lang="ts">
import { YwzChart, dayConfig } from '/@/components/three-line-pic'
const options = dayConfig()
</script>
<template>
  <div class="EchartsPage">
    <YwzChart :option="options" height="800px" />
  </div>
</template>
<style scoped></style>
