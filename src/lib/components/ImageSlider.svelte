<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	const imageModules = import.meta.glob('../../../static/images/slider/*.{png,jpg,jpeg,webp,gif,avif}', {
		eager: true,
		query: '?url',
		import: 'default'
	});

	const imagePaths = Object.values(imageModules) as string[];

	let orderedImages: string[] = [];
	let currentIndex = 0;
	let intervalId: ReturnType<typeof setInterval> | null = null;

	function shuffle<T>(items: T[]): T[] {
		const result = [...items];
		for (let i = result.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[result[i], result[j]] = [result[j], result[i]];
		}
		return result;
	}

	function nextSlide() {
		if (orderedImages.length < 2) return;
		currentIndex = (currentIndex + 1) % orderedImages.length;
	}

	onMount(() => {
		orderedImages = shuffle(imagePaths);

		if (orderedImages.length > 1) {
			intervalId = setInterval(nextSlide, 3500);
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	});
</script>

<section class="image-slider rounded-2xl overflow-hidden border border-[#cbdce7] dark:border-slate-700/60 bg-white dark:bg-slate-800/40 shadow-lg">
	{#if orderedImages.length > 0}
		<img src="{orderedImages[currentIndex].replace('/static', base)}" alt="mRemoteNG screenshot" loading="lazy" class="w-full h-auto min-h-[220px] object-cover block" />
	{:else}
		<div class="slider-empty p-12 text-center text-slate-500 dark:text-slate-400">Add images to /static/images/slider</div>
	{/if}
</section>
