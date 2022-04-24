import type { Ref } from 'vue'
export interface IUseRequestOption<T = any> {
  // 是否开启防抖 时长
  debounce?: boolean
  debounceInterval?: number
  // 是否开启节流 时长
  throttle?: boolean
  throttleInterval?: number
  // 是否轮询
  polling?: boolean
  pollingInterval?: number
  // 是否自动调用
  autoRun?: boolean
  // 调用完毕可执行的函数
  onFinish?: (data: T) => void
}
export interface IUseRequestRequest<D, T> {
  loading: Ref<boolean>
  data: Ref<T | undefined>
  run: (...args: any[]) => Promise<void>
  runParams: (params: D) => Promise<void>
}
export interface IWhyRequest<T> {
  code: number
  data: T
}
