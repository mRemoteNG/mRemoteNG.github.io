import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

import en from './locales/en.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import lt from './locales/lt.json';

export const locales: Record<string, typeof en> = { en, de, ru, lt };
export const availableLocales = Object.keys(locales);

function getInitialLang() {
	if (!browser) return 'en';

	const storedLang = localStorage.getItem('lang');
	if (storedLang && availableLocales.includes(storedLang)) {
		return storedLang;
	}

	const browserLang = navigator.language.split('-')[0];
	if (availableLocales.includes(browserLang)) {
		return browserLang;
	}

	return 'en';
}

export const currentLocale = writable(getInitialLang());

if (browser) {
	currentLocale.subscribe((value) => {
		localStorage.setItem('lang', value);
		document.documentElement.lang = value;
	});
}

export function setLocale(locale: string) {
	if (availableLocales.includes(locale)) {
		currentLocale.set(locale);
	}
}

export const t = derived(currentLocale, ($currentLocale) => {
	const currentTranslations = locales[$currentLocale] || locales.en;

	return (key: string, replacements: Record<string, string> = {}) => {
		let text = key.split('.').reduce((obj: any, k) => obj && obj[k], currentTranslations);
		if (text === undefined) {
			console.warn(`Translation key "${key}" not found for locale "${$currentLocale}".`);
			return key;
		}

		Object.keys(replacements).forEach((placeholder) => {
			const regex = new RegExp(`{${placeholder}}`, 'g');
			text = text.replace(regex, replacements[placeholder]);
		});

		return text;
	};
});

export const languageNames = derived(t, ($t) => ({
	en: $t('languages.en'),
	de: $t('languages.de'),
	ru: $t('languages.ru'),
	lt: $t('languages.lt')
}));
