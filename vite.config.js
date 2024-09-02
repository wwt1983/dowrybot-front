import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const KEYS_ENV = [
  "AIRTABLE_TOKEN",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  KEYS_ENV.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  }
})