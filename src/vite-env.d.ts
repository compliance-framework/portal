/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CONFIGURATION_SERVICE_BASE_PATH: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
