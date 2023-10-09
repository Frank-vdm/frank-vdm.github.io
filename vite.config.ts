import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'
// import { ViteRsw } from 'vite-plugin-rsw'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(), // Custom plugin to load markdown files
    {
      name: 'markdown-loader',
      transform(code, id) {
        if (id.slice(-3) === '.md') {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`
        }
      },
    },
  ],
})
