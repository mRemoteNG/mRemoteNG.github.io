<script lang="ts">
	import { currentLocale, setLocale, availableLocales, languageNames } from '$lib/i18n/store';
	import { onMount } from 'svelte';

	import flagEn from '$lib/i18n/flags/flag_great_britain.png';
	import flagDe from '$lib/i18n/flags/flag_germany.png';
	import flagRu from '$lib/i18n/flags/flag_russia.png';
	import flagLt from '$lib/i18n/flags/flag_lithuania.png';

	export let dropUp = false;

	const flags: Record<string, string> = {
		en: flagEn,
		de: flagDe,
		ru: flagRu,
		lt: flagLt
	};

	let isOpen = false;
	let dropdownRef: HTMLDivElement;

	function selectLocale(code: string) {
		setLocale(code);
		isOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="relative inline-block text-left" bind:this={dropdownRef} on:mouseleave={() => (isOpen = false)}>
	<button
		type="button"
		class="flex items-center justify-between gap-2 px-3 py-1.5 min-w-[135px] whitespace-nowrap rounded-lg bg-slate-300/80 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 border border-slate-400/50 dark:border-white/20 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors cursor-pointer"
		id="language-menu"
		aria-expanded={isOpen}
		on:click={() => (isOpen = !isOpen)}
	>
		<div class="flex items-center gap-2 overflow-hidden">
			{#if flags[$currentLocale]}
				<img src={flags[$currentLocale]} alt={$currentLocale} class="w-5 h-3.5 object-cover rounded-xs shrink-0" />
			{/if}
			<span class="lang-text truncate">{$languageNames[$currentLocale]}</span>
		</div>
		<i class="bi {isOpen ? (dropUp ? 'bi-chevron-down' : 'bi-chevron-up') : (dropUp ? 'bi-chevron-up' : 'bi-chevron-down')} text-xs text-slate-600 dark:text-slate-300 shrink-0 ml-1"></i>
	</button>

	{#if isOpen}
		<div class="absolute right-0 {dropUp ? 'bottom-full pb-1.5' : 'top-full pt-1.5'} w-40 z-50">
			<div class="bg-slate-200 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-800 rounded-xl shadow-2xl py-1">
				{#each availableLocales as localeCode (localeCode)}
					<button
						type="button"
						on:click={() => selectLocale(localeCode)}
						class="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors cursor-pointer {$currentLocale === localeCode ? 'bg-blue-600 text-white dark:bg-[#f4a261] dark:text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-300/60 dark:text-slate-200 dark:hover:bg-slate-800'}"
					>
						{#if flags[localeCode]}
							<img src={flags[localeCode]} alt={localeCode} class="w-5 h-3.5 object-cover rounded-xs" />
						{/if}
						<span>{$languageNames[localeCode]}</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
