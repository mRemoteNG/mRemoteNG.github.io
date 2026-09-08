import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

const getInitialTheme = () => {
    if (!isBrowser) return 'light';

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (value) => {
    if (!isBrowser) return;

    document.documentElement.classList.toggle('dark', value === 'dark');
    localStorage.setItem('theme', value);
};

export const theme = writable(getInitialTheme());

export function toggleTheme() {
    theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
}

if (isBrowser) {
    theme.subscribe((value) => {
        applyTheme(value);
    });
}
