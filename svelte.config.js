import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from 'sveltekit/vite';

const dev = process.argv.includes('dev');
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/mRemoteNG.github.io' // replace with your actual repo name
    },
    appDir: 'app' // avoids issues with GitHub Pages and underscores
  },
  preprocess: vitePreprocess()
};

export default config;