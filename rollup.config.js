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
      sourcemap: true, // Helpful for debugging
    },
    {
      file: 'dist/WalletPaymentForm.umd.js',
      format: 'umd',
      name: 'WalletPaymentForm',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env', { targets: '> 0.25%, not dead' }], // Transpile to widely supported JS
        '@babel/preset-react', // Handle JSX
      ],
      extensions: ['.js', '.jsx'],
      exclude: 'node_modules/**', // Don’t transpile dependencies
    }),
    resolve(),
    commonjs(),
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
  external: ['react', 'react-dom'], // Keep these as peer dependencies
};