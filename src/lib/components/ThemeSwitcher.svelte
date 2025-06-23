<!-- <script>
	import { theme, toggleTheme } from '$lib/theme';
	import { t } from '$lib/i18n/store';
</script>

<button on:click={toggleTheme} aria-label={$t('themeSwitcher.toggleLabel')} type="button" class="dropdown-item d-flex align-items-center d-inline-block" style="width: 150px;">
	{#if $theme === 'light'}
		🌙 <span class="button-text-label" data-bs-theme-value="dark" aria-pressed="true"> {$t('themeSwitcher.dark')}</span>
	{:else}
		☀️ <span class="button-text-label" data-bs-theme-value="light" aria-pressed="false">{$t('themeSwitcher.light')}</span>
	{/if}
</button> -->

<script>
    import { onMount } from 'svelte';
    import { theme, toggleTheme } from '$lib/stores/theme';
	import { t } from '$lib/i18n/store';
  
 
    let isDark = false;



    
    
    onMount(() => {
        const unsubscribe = theme.subscribe($theme => {
            isDark = $theme === 'dark';
        });
        
        return () => unsubscribe();
    });
  
 
  </script>
  
  <div class="theme-container">
    <label class="theme-switch">
        <input 
            type="checkbox" 
            bind:checked={isDark}
            on:change={toggleTheme}
            aria-label="Переключить тему"
        >
        <span class="slider">
            <span class="icon sun">
                <svg viewBox="0 0 24 24" width="16" height="16">
                    <circle cx="12" cy="12" r="5" fill="currentColor"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </span>
            <span class="icon moon">
                <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
                </svg>
            </span>
        </span>
    </label>
 
 </div> 
 




 <style>
    .theme-container {
         transition: background-color 0.3s ease, color 0.3s ease;
    }

    :global(:root) {
        --bg-light: #ffffff;
        --text-light: #333333;
        --bg-dark: #1a1a1a;
        --text-dark: #f0f0f0;
    }

    :global(.light) {
        background-color: var(--bg-light);
        color: var(--text-light);
    }

    :global(.dark) {
        background-color: var(--bg-dark);
        color: var(--text-dark);
    }

   .theme-switch {
    --width: 60px;
    --height: 32px;
    --padding: 2px;
    --transition: 0.3s;
    
    display: inline-block;
    position: relative;
    width: var(--width);
    height: var(--height);
    flex-shrink: 0; /* Важно для flex-контейнеров */
    margin-left:0%; /* Прижимаем к правому краю */
   }


    .theme-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f0f0f0;
        border: 1px solid #ddd;
        transition: var(--transition);
        border-radius: 34px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--padding);
        
    }

    .slider:before {
        position: absolute;
        content: "";
        height: calc(var(--height) - 8px);
        width: calc(var(--height) - 8px);
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: var(--transition);
        border-radius: 50%;
        z-index: 2;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    input:checked + .slider {
        background-color: #333;
        border-color: #444;
    }

    input:checked + .slider:before {
        transform: translateX(calc(var(--width) - var(--height)));
    }

    .icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .sun {
        color: #f39c12;
    }

    .moon {
        color: #f1c40f;
    }

    :global(.dark) .slider {
        background-color: #444;
        border-color: #555;
    }


</style>