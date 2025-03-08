import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import url from '@rollup/plugin-url'; // Import URL plugin

export default {
  input: 'src/WalletPaymentForm.js', // Your main JS file
  output: {
    file: 'dist/WalletPaymentForm.js', // Output bundle location
    format: 'umd', // Universal Module Definition
    name: 'WalletPaymentForm', // Name for the global variable
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx'],
    }),
    resolve(), // Resolve node modules
    commonjs(), // Convert CommonJS to ES modules
    css({ output: 'dist/WalletPaymentForm.css' }), // Extract CSS to a file
    url({
      include: ['**/*.jpg', '**/*.png', '**/*.gif'], // Handle image files
      limit: 0, // No inlining of images, copy to dist
      destDir: 'dist', // Output directory for assets
      publicPath: '', // You can specify a URL path if needed (optional)
      fileName: '[name][extname]', // Keep the original image names
    }),
  ],
  external: ['react'], // Mark react as external so it's not bundled with your lib
};
