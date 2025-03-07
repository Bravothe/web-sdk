import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import url from '@rollup/plugin-url';

export default {
  input: 'src/WalletPaymentForm.js',
  output: {
    file: 'dist/WalletPaymentForm.js',
    format: 'umd', // UMD for broad compatibility with React apps
    name: 'WalletPaymentForm',
  },
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
      limit: 0, // Always copy to dist, no inlining
      destDir: 'dist',
      publicPath: './', // Explicitly set to relative path
      fileName: '[name][extname]', // e.g., logo.jpg
    }),
  ],
  external: ['react', 'react-icons'],
};