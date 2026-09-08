<script>
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';
  import Home from './routes/Home.svelte';
  import Features from './routes/Features.svelte';
  import Download from './routes/Download.svelte';
  import Blog from './routes/Blog.svelte';
  import BlogPost from './routes/BlogPost.svelte';
  import Docs from './routes/Docs.svelte';
  import './styles/App.css';
  
  let currentLang = 'en';
  let translations = {};
  let darkMode = false;
  
  // Route definitions
  const routes = {
    '/': Home,
    '/features': Features,
    '/download': Download,
    '/blog': Blog,
    '/blog/:slug': BlogPost,
    '/docs': Docs,
    '*': Home
  };
  
  // Load language file from /lang folder
  async function loadLanguage(lang) {
    try {
      const response = await fetch(`/lang/${lang}.json`);
      if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
      translations = await response.json();
      currentLang = lang;
      localStorage.setItem('mremoteng_lang', lang);
    } catch (error) {
      console.error('Error loading language:', error);
      if (lang === 'en') {
        translations = {
          nav_home: "Home", nav_features: "Features", nav_download: "Download", 
          nav_blog: "Blog", nav_community: "Community", nav_docs: "Docs", 
          nav_github: "GitHub", dark_mode: "Dark", light_mode: "Light",
          // Home page
          slide1_title: "Powerful Remote Connections", 
          slide1_desc: "RDP, VNC, SSH, Telnet, HTTP/HTTPS — all in one tabbed interface.",
          slide2_title: "Secure & Open Source", 
          slide2_desc: "Fully transparent, community-driven. Your connections, your control.",
          slide3_title: "Works on Windows", 
          slide3_desc: "Native performance, portable mode, and enterprise-ready features.",
          feature1_title: "Multi-Protocol", 
          feature1_desc: "Seamlessly manage RDP, VNC, SSH, Telnet, ICA connections.",
          feature2_title: "Tabbed Interface", 
          feature2_desc: "Organize sessions with tabs and dockable panels.",
          feature3_title: "Encryption & Security", 
          feature3_desc: "Password protection, master passwords, secure storage.",
          feature4_title: "Portable & Inheritable", 
          feature4_desc: "Inherit credentials, portable mode, flexible configuration.",
          download_btn: "Download for Windows", 
          version_text: "Latest stable v1.77.3 - Free and open source",
          // Download page
          download_title: "Download mRemoteNG",
          download_subtitle: "Choose the version that's right for you",
          stable_channel: "Stable Channel", stable_desc: "Fully tested, production-ready release.",
          beta_channel: "Beta Channel", beta_desc: "Preview of upcoming features.",
          nightly_channel: "Nightly Build Channel", nightly_desc: "Latest development builds.",
          // Blog
          blog_title: "Latest News & Updates",
          blog_subtitle: "Stay up to date with mRemoteNG development",
          read_more: "Read more →",
          no_posts: "No blog posts found",
          // Footer
          footer_tag: "Multi-Remote Next Generation", 
          footer_license: "Licensed under GPL-2.0 · Community driven"
        };
      }
    }
  }
  
  function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem('mremoteng_theme', darkMode ? 'dark' : 'light');
    applyTheme();
  }
  
  function applyTheme() {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  
  function initTheme() {
    const stored = localStorage.getItem('mremoteng_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    darkMode = stored === 'dark' || (!stored && prefersDark);
    applyTheme();
  }
  
  onMount(async () => {
    initTheme();
    const savedLang = localStorage.getItem('mremoteng_lang') || 'en';
    await loadLanguage(savedLang);
  });
</script>

<svelte:head>
  <title>mRemoteNG · Multi-Remote Next Generation</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
</svelte:head>

<Header 
  {translations} 
  {currentLang} 
  onLangChange={loadLanguage} 
  onThemeToggle={toggleTheme} 
  {darkMode}
/>

<main>
  <Router {routes} />
</main>

<Footer {translations} />