type TableColType = 'selection' | 'index' | 'expand'
export interface ITableCol {
  prop?: string
  label?: string
  slotName?: string
  type?: TableColType
  width?: number | string
  'min-width'?: number | string
  itemAttr?: IStringObject
}
