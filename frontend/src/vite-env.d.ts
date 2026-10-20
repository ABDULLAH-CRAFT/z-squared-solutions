/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string | undefined
  readonly VITE_SITE_URL: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
