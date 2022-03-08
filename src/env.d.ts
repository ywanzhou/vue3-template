/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_BASE_URL: string
  readonly VITE_APP_KEY: string
  // 定义更多环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
