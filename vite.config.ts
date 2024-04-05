import { defineConfig } from 'vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'percentage',
      fileName: 'percentage',
    }
  },
  plugins: [
    ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
  ],

});