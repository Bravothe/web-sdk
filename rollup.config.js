import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/WalletPaymentForm.js',
  output: {
    file: 'dist/WalletPaymentForm.js',
    format: 'umd',
    name: 'WalletPaymentForm'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx']
    }),
    resolve(),
    commonjs(),
    css({ output: 'dist/WalletPaymentForm.css' })
  ],
  external: ['react']
};