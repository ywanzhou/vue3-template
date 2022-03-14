import { createPinia } from 'pinia'
import { useCountStore } from './modules/count'
const store = createPinia()

export default store
export { useCountStore }
