import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path';

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  // 配置需要的插件列表
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      "@": pathResolve("src")
    },
    // 强制预构建插件包
    optimizeDeps: {
      include: ["axios"]
    },
    // 打包配置
    build: {
      target: 'modules',
      outDir: "dist", // 指定生成静态资源的存放路径
      assetsDir: "assets",
      minify: "terser"  // 混淆器 terser构建后文件体积更小
    },
    // 本地运行配置 及 反向代理配置
    server: {
      cors: true,
      open: true,
      proxy: {
        '/api': {
          target: 'http://106.14.200.70:9000',   //代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
