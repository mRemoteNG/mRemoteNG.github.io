<script>
  import FeaturesGrid from '../lib/FeaturesGrid.svelte';
  export let translations = {};
</script>

<div class="features-page">
  <div class="page-header">
    <h1>Features</h1>
    <p>Everything you need to manage remote connections efficiently</p>
  </div>
  <FeaturesGrid {translations} />
</div>

<style>
  .features-page {
    padding: 2rem 0;
  }
  
  .page-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .page-header p {
    color: var(--text-secondary);
  }
</style>