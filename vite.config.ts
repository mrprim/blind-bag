import { defineConfig } from 'vite';
import yaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'bling-bag',
      fileName: (format) => `blind-bag.${format}.js`
    }
  },
  plugins: [
    yaml(),
  ],

});