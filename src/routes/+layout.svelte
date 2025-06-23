<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { assets } from '$app/paths';
	import '../app.css'; // Import global styles
	
	// Initialize stores (theme is initialized in its own file)
	// i18n store (currentLocale) is also initialized in its own file
	// Accessing them here ensures they are part of the component tree if needed,
	// but their primary setup is self-contained.
	import { theme } from '$lib/theme.js'; 
	import { currentLocale, t } from '$lib/i18n/store.js';

	// Reactive assignments to ensure Svelte tracks changes
	const activeTheme = $derived(theme);
	const activeLocale = $derived(currentLocale);
	
	let { children } = $props();
</script>

<svelte:head>
	<title>{$t('siteTitle')}</title>
	<meta charset="utf-8" />
		
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/png" href="{assets}/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
	<link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" /> 
	<link rel="shortcut icon" href="/favicon/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="{assets}/favicon/apple-touch-icon.png" />
	<link rel="manifest" href="{assets}/favicon/site.webmanifest" />
	<title>{$t('siteTitle')}</title>    
	<meta name="description" content="mRemoteNG - Remote Connections Manager" />

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>

	<link rel="stylesheet" href="https://bootswatch.com/5/darkly/bootstrap.css">
	<link rel="stylesheet" href="https://bootswatch.com/_vendor/bootstrap-icons/font/bootstrap-icons.min.css">
	<link rel="stylesheet" href="https://bootswatch.com/_vendor/prismjs/themes/prism-okaidia.css">
	<link rel="stylesheet" href="https://bootswatch.com/_assets/css/custom.min.css">

	
	<script src="https://bootswatch.com/_vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</svelte:head>


<div class="app-layout">
	<Header />
	<main>
		{@render children()}
	</main>
</div>

<Footer />