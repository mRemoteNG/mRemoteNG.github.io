import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function getInitialTheme() {
	if (!browser) return 'light';
	const storedTheme = localStorage.getItem('theme');
	if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
		return storedTheme;
	}
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
}

export const theme = writable(getInitialTheme());

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	});
}

export function toggleTheme() {
	theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
}