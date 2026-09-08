<script>
  import ImageSlider from '../lib/ImageSlider.svelte';
  import FeaturesGrid from '../lib/FeaturesGrid.svelte';
  
  export let translations = {};
</script>

<ImageSlider {translations} />
<FeaturesGrid {translations} />

<div class="download-section">
  <a href="/download" class="download-btn">
    <i class="fas fa-download"></i>
    <span>{translations.download_btn || 'Download for Windows'}</span>
  </a>
  <p class="version-text">{translations.version_text || 'Latest stable v1.77.3 - Free and open source'}</p>
</div>