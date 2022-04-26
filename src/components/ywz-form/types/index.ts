type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IStringObject {
  [index: string]: any
}

export interface IFormItem {
  components: IFormType
  // 对应表单中的v-model
  field: string
  label?: string
  placeholder?: string
  options?: any[]
  // 使用 v-bind即可绑定剩余属性
  otherOptions?: IStringObject
}
export interface IColLayoutBase {
  span?: number
  offset?: number
  push?: number
  pull?: number
}
export interface IColLayout extends IColLayoutBase {
  xs?: number | IColLayoutBase
  sm?: number | IColLayoutBase
  md?: number | IColLayoutBase
  lg?: number | IColLayoutBase
  xl?: number | IColLayoutBase
}
