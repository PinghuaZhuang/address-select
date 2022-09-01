import { defineConfig } from 'vite';
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import path from 'path';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import typescript from '@rollup/plugin-typescript';

const isDev = process.env.VITE_ENV === 'dev';
const APP_TMAP_KEY = 'Y5UBZ-7QE6P-B3PDK-VCTDL-4DRVK-OPFCI';

function resolve(url: string) {
  return path.resolve(__dirname, url);
}

// https://vitejs.dev/config/
export default defineConfig({
  root: isDev ? resolve('./demo') : process.cwd(),
  base: './',
  envPrefix: 'APP_',
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: isDev ? resolve('./example') : 'lib',
    lib: isDev
      ? undefined
      : {
          entry: resolve('./src'),
          name: 'PermissionTable',
          formats: ['es', 'umd'],
          fileName: (format) => `index.${format}.js`,
        },
    rollupOptions: isDev
      ? {}
      : {
          external: ['react', 'react-dom', 'antd'],
          output: {
            globals: {
              react: 'react',
              antd: 'antd',
              'react-dom': 'react-dom',
            },
          },
          plugins: [
            typescript({
              target: 'es2015',
              rootDir: resolve('./src'),
              declaration: true,
              declarationDir: resolve('./lib'),
              exclude: resolve('node_modules/**'),
              tsconfig: resolve('./tsconfig.json'),
            }),
          ],
        },
  },
  resolve: {
    alias: {
      '@': resolve('./demo'),
      '@is': resolve('./demo/utils/is'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: isDev
    ? [
        legacy(),
        react(),
        createStyleImportPlugin({
          resolves: [AntdResolve()],
        }),
        {
          name: 'TMapKey',
          transformIndexHtml(html) {
            return {
              html,
              tags: [
                {
                  tag: 'script',
                  attrs: {
                    src: `https://map.qq.com/api/gljs?v=1.exp&libraries=service&key=${APP_TMAP_KEY}`,
                  },
                  injectTo: 'head',
                },
              ],
            };
          },
        },
      ]
    : [],
});
