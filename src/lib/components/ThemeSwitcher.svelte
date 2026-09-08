<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { t } from '$lib/i18n/store';
</script>

<button
	type="button"
	role="switch"
	aria-checked={$theme === 'dark'}
	aria-label={$t('themeSwitcher.toggleLabel')}
	on:click={toggleTheme}
	class="relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full bg-slate-300/80 dark:bg-white/10 border border-slate-400/50 dark:border-white/20 p-0.5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
>
	<span class="sr-only">{$t('themeSwitcher.toggleLabel')}</span>
	
	<!-- Background icons -->
	<span class="absolute left-1 text-[11px] leading-none select-none pointer-events-none opacity-80">☀️</span>
	<span class="absolute right-1 text-[11px] leading-none select-none pointer-events-none opacity-80">🌙</span>
	
	<!-- Slider Thumb -->
	<span
		class="pointer-events-none relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out"
		class:translate-x-6={$theme === 'dark'}
		class:translate-x-0={$theme !== 'dark'}
	>
		<span class="text-[10px] leading-none select-none">
			{#if $theme === 'dark'}🌙{:else}☀️{/if}
		</span>
	</span>
</button>
