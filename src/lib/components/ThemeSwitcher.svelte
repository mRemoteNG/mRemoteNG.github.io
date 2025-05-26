<script>
	import { theme, toggleTheme } from '$lib/theme';
	import { t } from '$lib/i18n/store';
</script>

<button on:click={toggleTheme} aria-label={$t('themeSwitcher.toggleLabel')} type="button" class="dropdown-item d-flex align-items-center d-inline-block" style="width: 150px;">
	{#if $theme === 'light'}
		🌙 <span class="button-text-label" data-bs-theme-value="dark" aria-pressed="true"> {$t('themeSwitcher.dark')}</span>
	{:else}
		☀️ <span class="button-text-label" data-bs-theme-value="light" aria-pressed="false">{$t('themeSwitcher.light')}</span>
	{/if}
</button>