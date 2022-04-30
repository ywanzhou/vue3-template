import { createPinia } from 'pinia'
import { useCountStore } from './modules/count'
import { useUserStore } from './modules/user'
export default createPinia()
export { useCountStore, useUserStore }
