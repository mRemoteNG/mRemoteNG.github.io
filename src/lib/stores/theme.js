import { writable } from 'svelte/store';

// Функция для безопасного доступа к localStorage
const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light'; // Для SSR
    
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return storedTheme || (systemPrefersDark ? 'dark' : 'light');
};

export const theme = writable(getInitialTheme());

export function toggleTheme() {
    theme.update(current => {
        const newTheme = current === 'light' ? 'dark' : 'light';
        
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
            document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
        
        return newTheme;
    });
}

// Инициализация только на клиенте
if (typeof window !== 'undefined') {
    theme.subscribe($theme => {
        document.documentElement.classList.toggle('dark', $theme === 'dark');
    });
}