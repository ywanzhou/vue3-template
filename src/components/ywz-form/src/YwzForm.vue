<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <el-form :model="form" :label-width="props.labelWidth || '20px'">
    <el-row :gutter="20">
      <template v-for="(item, index) in props.formData" :key="index">
        <el-col v-bind="colLayout">
          <el-form-item :label="item.label">
            <template
              v-if="
                item.components === 'input' || item.components === 'password'
              "
            >
              <el-input
                v-model="form[`${item.field}`]"
                :placeholder="item.placeholder"
                :show-password="item.components === 'password'"
                v-bind="item.otherOptions"
              ></el-input>
            </template>
            <template v-if="item.components === 'select'">
              <el-select
                v-model="form[`${item.field}`]"
                :placeholder="item.placeholder"
                clearable
                filterable
                v-bind="item.otherOptions"
                style="width: 100%"
              >
                <el-option
                  v-for="_ in item.options"
                  :key="_.value"
                  :label="_.label"
                  :value="_.value"
                >
                </el-option>
              </el-select>
            </template>
            <template v-if="item.components === 'datepicker'">
              <el-date-picker
                v-model="form[`${item.field}`]"
                type="daterange"
                range-separator="-"
                v-bind="item.otherOptions"
                style="width: 100%"
              />
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import type { IFormItem, IColLayout, IStringObject } from './../types'
interface Props {
  labelWidth?: string
  formData: IFormItem[]
  colLayout: IColLayout
  modelValue: any
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])
const form = useVModel(props, 'modelValue', emits)
// 清空数据的方法
const clearAllValue = () => {
  const map: IStringObject = {
    '[object String]': '',
    '[object Array]': [],
  }
  for (const i in form.value) {
    const typeValue = Object.prototype.toString.call(form.value[i])
    form.value[i] = map[typeValue]
  }
}
defineExpose({
  // 可以通过ref的方式的访问
  clearAllValue,
})
</script>
