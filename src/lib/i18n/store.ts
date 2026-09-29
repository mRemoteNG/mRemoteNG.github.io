import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

import en from './locales/en.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import lt from './locales/lt.json';

export const locales = { en, de, ru, lt } satisfies Record<string, typeof en>;
export type Locale = keyof typeof locales;
export const availableLocales = Object.keys(locales) as Locale[];

function isLocale(value: string): value is Locale {
	return value in locales;
}

function getInitialLang(): Locale {
	if (!browser) return 'en';

	const storedLang = localStorage.getItem('lang');
	if (storedLang && isLocale(storedLang)) {
		return storedLang;
	}

	const browserLang = navigator.language.split('-')[0];
	if (isLocale(browserLang)) {
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
	if (isLocale(locale)) {
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
