<script>
  import { onMount } from 'svelte';
  import { location } from 'svelte-spa-router';
  import '../styles/Header.css';
  
  export let translations = {};
  export let currentLang = 'en';
  export let onLangChange = (lang) => {};
  export let onThemeToggle = () => {};
  export let darkMode = false;
  
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪', nativeName: 'Deutsch' },
    { code: 'fr', label: 'Français', flag: '🇫🇷', nativeName: 'Français' },
    { code: 'es', label: 'Español', flag: '🇪🇸', nativeName: 'Español' }
  ];
  
  const socialLinks = [
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/mRemoteNG', color: '#1DA1F2' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/mRemoteNG/mRemoteNG', color: '#333333' },
    { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/mRemoteNG', color: '#5865F2' },
    { name: 'Reddit', icon: 'fab fa-reddit-alien', url: 'https://www.reddit.com/r/mRemoteNG/', color: '#FF4500' },
    { name: 'Stack Overflow', icon: 'fab fa-stack-overflow', url: 'https://stackoverflow.com/questions/tagged/mremoteng', color: '#F48024' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/results?search_query=mRemoteNG', color: '#FF0000' }
  ];
  
  let isLangDropdownOpen = false;
  let isSocialDropdownOpen = false;
  let langDropdownRef = null;
  let socialDropdownRef = null;
  
  function handleLangSelect(langCode) {
    onLangChange(langCode);
    isLangDropdownOpen = false;
  }
  
  function toggleLangDropdown() {
    isLangDropdownOpen = !isLangDropdownOpen;
    isSocialDropdownOpen = false;
  }
  
  function toggleSocialDropdown() {
    isSocialDropdownOpen = !isSocialDropdownOpen;
    isLangDropdownOpen = false;
  }
  
  function handleClickOutside(event) {
    if (langDropdownRef && !langDropdownRef.contains(event.target)) {
      isLangDropdownOpen = false;
    }
    if (socialDropdownRef && !socialDropdownRef.contains(event.target)) {
      isSocialDropdownOpen = false;
    }
  }
  
  function getCurrentLanguage() {
    return languages.find(lang => lang.code === currentLang) || languages[0];
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<header class="navbar">
  <div class="container nav-flex">
    <div class="logo-area">
      <a href="/" class="logo-link">
        <div class="logo-icon">mR</div>
        <span>mRemoteNG</span>
      </a>
    </div>
    
    <div class="nav-links">
      <a href="/" class={$location === '/' ? 'active' : ''}>Home</a>
      <a href="/features" class={$location === '/features' ? 'active' : ''}>Features</a>
      <a href="/download" class={$location === '/download' ? 'active' : ''}>Download</a>
      <a href="/blog" class={$location.startsWith('/blog') ? 'active' : ''}>Blog</a>
      
      <div class="dropdown" bind:this={socialDropdownRef}>
        <button class="dropdown-trigger" on:click={toggleSocialDropdown}>
          <i class="fas fa-share-alt"></i>
          <span>Community</span>
          <i class="fas fa-chevron-down {isSocialDropdownOpen ? 'open' : ''}"></i>
        </button>
        
        {#if isSocialDropdownOpen}
          <div class="dropdown-menu social-menu">
            {#each socialLinks as social}
              <a href="{social.url}" class="social-link" target="_blank" rel="noopener noreferrer" style="--social-color: {social.color}">
                <i class="{social.icon}"></i>
                <span>{social.name}</span>
                <i class="fas fa-external-link-alt ext-icon"></i>
              </a>
            {/each}
          </div>
        {/if}
      </div>
      
      <a href="/docs" class={$location === '/docs' ? 'active' : ''}>Docs</a>
      <a href="https://github.com/mRemoteNG/mRemoteNG" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i> GitHub
      </a>
    </div>
    
    <div class="controls">
      <button class="theme-toggle" on:click={onThemeToggle}>
        <i class={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
        <span>{darkMode ? 'Light' : 'Dark'}</span>
      </button>
      
      <div class="language-selector" bind:this={langDropdownRef}>
        <button class="lang-trigger" on:click={toggleLangDropdown}>
          <span class="lang-flag">{getCurrentLanguage().flag}</span>
          <span class="lang-name">{getCurrentLanguage().nativeName}</span>
          <i class="fas fa-chevron-down {isLangDropdownOpen ? 'open' : ''}"></i>
        </button>
        
        {#if isLangDropdownOpen}
          <div class="lang-dropdown">
            {#each languages as lang}
              <button class="lang-option {lang.code === currentLang ? 'active' : ''}" on:click={() => handleLangSelect(lang.code)}>
                <span class="lang-flag">{lang.flag}</span>
                <span class="lang-name">{lang.nativeName}</span>
                {#if lang.code === currentLang}
                  <i class="fas fa-check"></i>
                {/if}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</header>