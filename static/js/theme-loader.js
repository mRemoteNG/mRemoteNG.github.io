(function() {
  try {
    const storedTheme = localStorage.getItem('theme');
    const theme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', theme);
    
    if (theme === 'dark') {
      const darkThemeLink = document.createElement('link');
      darkThemeLink.rel = 'stylesheet';
      darkThemeLink.href = 'https://bootswatch.com/5/darkly/bootstrap.css';
      darkThemeLink.integrity = 'sha384-mXM+8P9BUwTXMBS6pzZaBva0g/sZsdn7ZdBimWWpF/1K2kVhkyjQrBznOTf31ui7';
      darkThemeLink.crossOrigin = 'anonymous';
      darkThemeLink.setAttribute('data-theme', 'dark');
      document.head.appendChild(darkThemeLink);
    }
  } catch (e) {
    console.error('Theme error:', e);
  }
})();