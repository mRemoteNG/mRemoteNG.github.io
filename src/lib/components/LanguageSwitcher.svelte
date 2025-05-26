<script lang="ts">
	import { currentLocale, setLocale, availableLocales, languageNames } from '$lib/i18n/store';
	
	// Subscribe to the languageNames store to get its value
	import { get } from 'svelte/store';
	const languageNamesTyped: Record<string, string> = get(languageNames);
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let showDropdown = false;
	let switcherElement: HTMLElement | null = null; // To detect clicks outside

	const flags = {
		en: '🇬🇧', // Using UK flag for English example
		ru: '🇷🇺',
		de: '🇩🇪'
	};

	function toggleDropdown() {
		showDropdown = !showDropdown;
	}

	function selectLocale(locale: string) {
		setLocale(locale);
		showDropdown = false;
	}
	
	function handleClickOutside(event: MouseEvent) {
		if (browser && switcherElement && !switcherElement.contains(event.target as Node)) {
			showDropdown = false;
		}
	}

	onMount(() => {
		if (browser) {
			document.addEventListener('click', handleClickOutside, true);
			return () => {
				document.removeEventListener('click', handleClickOutside, true);
			};
		}
	});
</script>

<li class="nav-item dropdown" data-bs-theme="light">
	<button type="button" class="nav-link dropdown-toggle d-flex align-items-center" id="version-menu" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle theme">
		<span class="lang-text">{languageNamesTyped[$currentLocale]}</span>
	</button>
	<ul class="dropdown-menu">
		{#each availableLocales as localeCode (localeCode)}
			<li style="width: 150px;">
				<button
					type="button"
					on:click={() => selectLocale(localeCode)}
					class:active-lang={$currentLocale === localeCode}
					role="menuitem"
					style="width: 100%; text-align: left; background: none; border: none; padding: 0.5em 1em; cursor: pointer;"
				>
					{languageNamesTyped[localeCode]}
				</button>
			</li>
		{/each}
	</ul>
</li>