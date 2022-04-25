import { createPinia } from 'pinia'
import { useCountStore } from './modules/count'
import { useUserStore } from './modules/user'
const store = createPinia()
export default store
export { useCountStore, useUserStore }
