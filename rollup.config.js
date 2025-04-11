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
      },
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true, // Target modern browsers that support ES modules
              browsers: 'defaults, not IE 11', // Broad compatibility, excludes IE
            },
            useBuiltIns: 'usage', // Polyfill only what's needed
            corejs: 3, // Use core-js for polyfills
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-optional-chaining', // Explicitly transpile optional chaining
        '@babel/plugin-proposal-nullish-coalescing-operator', // For future-proofing
      ],
      extensions: ['.js', '.jsx'],
      exclude: 'node_modules/**',
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
  external: ['react', 'react-dom'],
};