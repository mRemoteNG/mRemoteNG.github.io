import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter({
				fallback: '200.html'
			}),
			csp: {
				directives: {
					'default-src': ['self'],
					'script-src': ['self'],
					'style-src': ['self', 'unsafe-inline'],
					'connect-src': ['self', 'https://formsubmit.co']
				}
			},
			inlineStyleThreshold: 0,
			paths: {
				base: (process.env.BASE_PATH || '') as '' | `/${string}`
			},
			appDir: 'app',
			preprocess: vitePreprocess()
		})
	]
});
