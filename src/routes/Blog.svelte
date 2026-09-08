<script>
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import '../styles/Blog.css';
  
  export let translations = {};
  
  let posts = [];
  let loading = true;
  
  // Configure marked for safe rendering
  marked.setOptions({
    breaks: true,
    gfm: true
  });
  
  async function loadPosts() {
    try {
      // List of markdown files in the /posts directory
      const postFiles = [
        'thanks-for-contribute',
        'v1773-nightly-build',
        'windows-11',
        'nightly-builds',
        'is-that-it'
      ];
      
      const loadedPosts = [];
      
      for (const slug of postFiles) {
        try {
          const response = await fetch(`/posts/${slug}.md`);
          if (response.ok) {
            const markdown = await response.text();
            
            // Extract title and excerpt from markdown
            const titleMatch = markdown.match(/^#\s+(.+)$/m);
            const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');
            
            // Get first paragraph as excerpt (skip the title line)
            const lines = markdown.split('\n');
            let excerpt = '';
            let foundContent = false;
            for (const line of lines) {
              if (line.trim() && !line.startsWith('#')) {
                excerpt = line.trim();
                foundContent = true;
                break;
              }
            }
            if (!foundContent && lines.length > 1) {
              excerpt = lines[1].trim();
            }
            
            // Limit excerpt length
            if (excerpt.length > 200) {
              excerpt = excerpt.substring(0, 197) + '...';
            }
            
            loadedPosts.push({
              slug,
              title: title.charAt(0).toUpperCase() + title.slice(1),
              excerpt,
              date: await extractDateFromMarkdown(markdown) || getDefaultDate(slug)
            });
          }
        } catch (err) {
          console.error(`Failed to load post: ${slug}`, err);
        }
      }
      
      // Sort by date (newest first)
      loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      posts = loadedPosts;
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      loading = false;
    }
  }
  
  async function extractDateFromMarkdown(markdown) {
    // Look for date in format: **Date:** YYYY-MM-DD or similar patterns
    const dateMatch = markdown.match(/\*\*Date:\*\*\s*(\d{4}-\d{2}-\d{2})/i);
    if (dateMatch) return dateMatch[1];
    
    // Alternative: look for YYYY-MM-DD pattern
    const isoMatch = markdown.match(/(\d{4}-\d{2}-\d{2})/);
    if (isoMatch) return isoMatch[1];
    
    return null;
  }
  
  function getDefaultDate(slug) {
    // Assign plausible dates based on original mRemoteNG blog posts
    const dates = {
      'thanks-for-contribute': '2023-02-21',
      'v1773-nightly-build': '2023-02-10',
      'windows-11': '2021-07-15',
      'nightly-builds': '2021-06-28',
      'is-that-it': '2021-06-20'
    };
    return dates[slug] || '2023-01-01';
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  
  onMount(() => {
    loadPosts();
  });
</script>

<div class="blog-page">
  <div class="page-header">
    <h1>{translations.blog_title || 'Latest News & Updates'}</h1>
    <p>{translations.blog_subtitle || 'Stay up to date with mRemoteNG development'}</p>
  </div>
  
  {#if loading}
    <div class="loading-spinner">
      <i class="fas fa-spinner fa-spin"></i>
      <span>Loading posts...</span>
    </div>
  {:else if posts.length === 0}
    <div class="no-posts">
      <i class="fas fa-newspaper"></i>
      <p>{translations.no_posts || 'No blog posts found'}</p>
    </div>
  {:else}
    <div class="posts-grid">
      {#each posts as post}
        <article class="post-card">
          <div class="post-date">
            <i class="far fa-calendar-alt"></i>
            <span>{formatDate(post.date)}</span>
          </div>
          <h2 class="post-title">
            <a href="/blog/{post.slug}">{post.title}</a>
          </h2>
          <p class="post-excerpt">{post.excerpt}</p>
          <a href="/blog/{post.slug}" class="read-more">
            {translations.read_more || 'Read more →'}
          </a>
        </article>
      {/each}
    </div>
  {/if}
</div>