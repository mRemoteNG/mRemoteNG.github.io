<script>
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import { location } from 'svelte-spa-router';
  import '../styles/Blog.css';
  
  export let params = {};
  
  let post = null;
  let loading = true;
  let error = null;
  
  // Configure marked for safe rendering
  marked.setOptions({
    breaks: true,
    gfm: true
  });
  
  async function loadPost() {
    const slug = params.slug;
    if (!slug) {
      error = 'No post specified';
      loading = false;
      return;
    }
    
    try {
      const response = await fetch(`/posts/${slug}.md`);
      if (!response.ok) {
        throw new Error(`Post not found: ${slug}`);
      }
      
      const markdown = await response.text();
      const html = marked.parse(markdown);
      
      // Extract title from first heading
      const titleMatch = markdown.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');
      
      // Extract date if present
      const dateMatch = markdown.match(/\*\*Date:\*\*\s*(\d{4}-\d{2}-\d{2})/i);
      const date = dateMatch ? dateMatch[1] : null;
      
      post = {
        slug,
        title: title.charAt(0).toUpperCase() + title.slice(1),
        content: html,
        date
      };
    } catch (err) {
      console.error('Error loading post:', err);
      error = err.message;
    } finally {
      loading = false;
    }
  }
  
  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  
  function goBack() {
    window.history.back();
  }
  
  onMount(() => {
    loadPost();
  });
  
  $: if (params.slug) {
    loadPost();
  }
</script>

<div class="blog-post-page">
  {#if loading}
    <div class="loading-spinner">
      <i class="fas fa-spinner fa-spin"></i>
      <span>Loading post...</span>
    </div>
  {:else if error}
    <div class="error-message">
      <i class="fas fa-exclamation-triangle"></i>
      <h2>Post Not Found</h2>
      <p>{error}</p>
      <a href="/blog" class="back-link">← Back to Blog</a>
    </div>
  {:else if post}
    <article class="post-container">
      <div class="post-header">
        <a href="/blog" class="back-to-blog">
          <i class="fas fa-arrow-left"></i> Back to Blog
        </a>
        <h1>{post.title}</h1>
        {#if post.date}
          <div class="post-meta">
            <i class="far fa-calendar-alt"></i>
            <span>{formatDate(post.date)}</span>
          </div>
        {/if}
      </div>
      
      <div class="post-content">
        {@html post.content}
      </div>
    </article>
  {/if}
</div>