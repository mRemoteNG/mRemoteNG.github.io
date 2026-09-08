<script lang="ts">
	import { t } from '$lib/i18n/store';
	import ImageSlider from '$lib/components/ImageSlider.svelte';
</script>

<section class="home py-6 space-y-4" id="home">
	<p class="text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{$t('homepage.intro1')}</p>
	<p class="text-slate-600 dark:text-slate-300 leading-relaxed">{$t('homepage.intro2')}</p>

	<h2 class="text-2xl font-bold text-slate-900 dark:text-white pt-4">{$t('homepage.sliderTitle')}</h2>
	<ImageSlider />
</section>
