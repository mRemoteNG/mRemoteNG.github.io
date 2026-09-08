<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { base, assets } from '$app/paths';
	import '../app.css'; // Import global styles
	
	import { t } from '$lib/i18n/store.js';

	let { children } = $props();
</script>

<svelte:head>
	<title>{$t('siteTitle')}</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="mRemoteNG - Remote Connections Manager" />
	<meta name="keywords" content="mRemoteNG, remote connections, remote desktop, RDP, VNC, SSH, Telnet, mRemote, mRemoteX" />
	<meta name="author" content="mRemoteNG Team" />

	<link 
		rel="preload" 
		href="{base}/fonts/HandelGotDBol/HandelGotDBol.woff2" 
		as="font" 
		type="font/woff2" 
		crossorigin="anonymous"
	/>

	<link 
		rel="icon" 
		type="image/png" 
		href="{assets}/favicon/favicon-96x96.png" 
		sizes="96x96" 
	/>
	<link 
		rel="icon" 
		type="image/svg+xml" 
		href="{assets}/favicon/favicon.svg" 
	/>
	<link 
		rel="icon" 
		type="image/x-icon" 
		href="{assets}/favicon/favicon.ico" 
	/> 
	<link 
		rel="shortcut icon" 
		href="{assets}/favicon/favicon.ico" 
	/>
	<link 
		rel="apple-touch-icon" 
		sizes="180x180" 
		href="{assets}/favicon/apple-touch-icon.png" 
	/>
	<link 
		rel="manifest" 
		href="{assets}/favicon/site.webmanifest" 
	/>

	<!-- Preload for faster execution -->
  	<link 
		rel="preload" 
		href="{base}/js/theme-loader.js" 
		as="script"
	/>
  
  	<!-- Load with async to avoid render-blocking -->
  	<script 
		src="{base}/js/theme-loader.js" 
		async>
	</script>
</svelte:head>

<div class="app-layout min-h-screen flex flex-col pt-16">
	<Header />
	<main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
		{@render children()}
	</main>
	<Footer />
</div>