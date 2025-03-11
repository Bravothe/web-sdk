import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import url from '@rollup/plugin-url';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default {
  input: 'src/WalletPaymentForm.js',
  output: [
    {
      file: 'dist/WalletPaymentForm.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/WalletPaymentForm.umd.js',
      format: 'umd',
      name: 'WalletPaymentForm',
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx'],
    }),
    resolve(),
    commonjs(),
    css({ output: 'dist/WalletPaymentForm.css' }),
    url({
      include: ['**/*.jpg', '**/*.png', '**/*.gif'],
      limit: 0,
      destDir: 'dist',
      publicPath: '',
      fileName: '[name][extname]',
    }),
    NodeGlobalsPolyfillPlugin({
      process: true,
      buffer: true,
    }),
  ],
  external: ['react', 'react-dom'],
};