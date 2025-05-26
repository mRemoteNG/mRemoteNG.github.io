import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Import translations
import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';

// Add an index signature to allow string keys for locales
export const locales: Record<string, typeof en> = { en, ru, de };
export const availableLocales = Object.keys(locales); // ['en', 'ru', 'de']

function getInitialLang() {
	if (!browser) return 'en'; // Default for SSR
	const storedLang = localStorage.getItem('lang');
	if (storedLang && availableLocales.includes(storedLang)) {
		return storedLang;
	}
	// Basic browser language detection (can be expanded)
	const browserLang = navigator.language.split('-')[0];
	if (availableLocales.includes(browserLang)) {
		return browserLang;
	}
	return 'en'; // Default
}

export const currentLocale = writable(getInitialLang());

if (browser) {
	currentLocale.subscribe((value) => {
		localStorage.setItem('lang', value);
		document.documentElement.lang = value; // Set lang attribute on HTML element
	});
}

export function setLocale(locale: string) {
	if (availableLocales.includes(locale)) {
		currentLocale.set(locale);
	}
}

// Derived store for translations
export const t = derived(currentLocale, ($currentLocale) => {
	const currentTranslations = locales[$currentLocale] || locales.en;
	
	// Helper function to get nested keys like "header.home"
	return (key: string, replacements: Record<string, string> = {}) => {
		let text = key.split('.').reduce((obj: any, k) => obj && obj[k], currentTranslations);
		if (text === undefined) {
			console.warn(`Translation key "${key}" not found for locale "${$currentLocale}".`);
			return key; // Return the key itself if not found
		}
		// Handle replacements like {count}
		Object.keys(replacements).forEach(placeholder => {
			const regex = new RegExp(`{${placeholder}}`, 'g');
			text = text.replace(regex, replacements[placeholder]);
		});
		return text;
	};
});

// Store for language names, translated by current locale
export const languageNames = derived(t, ($t) => ({
	en: $t('languages.en'),
	ru: $t('languages.ru'),
	de: $t('languages.de'),
}));