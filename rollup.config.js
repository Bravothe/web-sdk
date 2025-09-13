// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default {
  input: 'src/WalletPaymentForm.js',
  output: [
    {
      file: 'dist/WalletPaymentForm.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/WalletPaymentForm.umd.js',
      format: 'umd',
      name: 'WalletPaymentForm',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        antd: 'antd',
        '@ant-design/icons': 'icons', // ensure your UMD host provides this global
      },
    },
  ],
  external: ['react', 'react-dom', 'antd', '@ant-design/icons'],
  plugins: [
    // 1) Assets (gif/mp4/etc.) before anything else
    url({
      include: [
        '**/*.mp4', '**/*.webm', '**/*.mp3',
        '**/*.gif', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg',
        '**/*.json'
      ],
      limit: 0,
      fileName: 'assets/[name]-[hash][extname]',
    }),

    // 2) Resolve ESM + .jsx
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json'],
    }),

    // 3) Transpile JSX before CommonJS touches modules
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', {
          targets: { esmodules: true },
          useBuiltIns: 'usage',
          corejs: 3,
        }],
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
    }),

    // 4) CommonJS only for node_modules
    commonjs({
      include: /node_modules/,
    }),

    NodeGlobalsPolyfillPlugin({
      process: true,
      buffer: true,
    }),
  ],
};
