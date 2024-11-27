import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {  // 这里的'/api'是一个示例，代表要代理的请求路径前缀，你可以根据实际需求修改
        target: 'http://127.0.0.1:8000',  // 将请求代理到这个目标地址
        changeOrigin: true,  // 改变请求源，让服务器以为请求是来自于浏览器端，很重要的配置项
        rewrite: (path) => path.replace(/^\/api/, '')  // 重写路径，把请求路径中匹配的前缀去掉，比如请求/api/user 会转发为 /user 到目标服务器，根据实际情况调整
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
