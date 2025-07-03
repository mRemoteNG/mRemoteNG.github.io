<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { base, assets } from '$app/paths';
	import '../app.css'; // Import global styles
	
	// Initialize stores (theme is initialized in its own file)
	// i18n store (currentLocale) is also initialized in its own file
	// Accessing them here ensures they are part of the component tree if needed,
	// but their primary setup is self-contained.
    import { theme, toggleTheme } from '$lib/stores/theme';
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
	<meta name="description" content="mRemoteNG - Remote Connections Manager" />
	<meta name="keywords" content="mRemoteNG, remote connections, remote desktop, RDP, VNC, SSH, Telnet, mRemote, mRemoteX" />
	<meta name="author" content="mRemoteNG Team" />

	<link rel="icon" type="image/png" href="{assets}/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="{assets}/favicon/favicon.svg" />
	<link rel="icon" type="image/x-icon" href="{assets}/favicon/favicon.ico" /> 
	<link rel="shortcut icon" href="{assets}/favicon/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="{assets}/favicon/apple-touch-icon.png" />
	<link rel="manifest" href="{assets}/favicon/site.webmanifest" />
	
	<!-- Bootstrap CSS -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
		integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
		crossorigin="anonymous" />

	<!-- Bootswatch: Darkly theme -->
	<link
		rel="stylesheet"
		href="https://bootswatch.com/5/darkly/bootstrap.css"
		integrity="sha384-IznVmLnW7mND5pWWovGJ4PPSv6P0ocjj3pNmKng15+gDLrCYYyeRHqmbq26oqLUK"
		crossorigin="anonymous" />

	<!-- Bootstrap Icons -->
	<link
		rel="stylesheet"
		href="https://bootswatch.com/_vendor/bootstrap-icons/font/bootstrap-icons.min.css"
		integrity="sha384-aMbNX8jFtSKhIuWSIHn8kuZ+XZ0IMKhpHeElS5OpN9SoI+TAcG7byPLj4UOpAIYn"
		crossorigin="anonymous" />

	<!-- PrismJS Theme -->
	<link
		rel="stylesheet"
		href="https://bootswatch.com/_vendor/prismjs/themes/prism-okaidia.css"
		integrity="sha384-6U+XhAWXGaFaDfnWJhU8cfYUIRka9j/qcWDCUcGjA9fs4yiMsCyKrhceV6QOBwv8"
		crossorigin="anonymous" />

	<!-- Bootswatch Custom -->
	<link
		rel="stylesheet"
		href="https://bootswatch.com/_assets/css/custom.min.css"
		integrity="sha384-Nyxm9Mvo3fMRrFnaIt9shtDFdlq2MufOlaSPadnStOsUKTSlyvqa7X2SlP7UNXoD"
		crossorigin="anonymous" />

	<!-- Bootstrap JS -->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
		integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
		crossorigin="anonymous"></script>

	<!-- Bootswatch JS Bundle -->
	<script
		src="https://bootswatch.com/_vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-LsTGcbITkMbUTw6RjDAkhn5UBOJgqN35N2YdYoZyOAtn9WEuJOnzq+JEmzhlDyIU"
		crossorigin="anonymous"></script>
</svelte:head>

<div class="app-layout container">
	<Header />
	<main>
		{@render children()}
	</main>
</div>

<Footer />