<script lang="ts">
	import { t } from '$lib/i18n/store';

	let { data } = $props();
</script>

<svelte:head>
	<title>{$t('feed.title')}</title>
	<meta name="feed" content="Developer updates" />
</svelte:head>

<section class="feed-page py-6">
	<h1 class="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{$t('feed.title')}</h1>

	{#if data.posts.length === 0}
		<p class="text-slate-600 dark:text-slate-400">{$t('feed.empty')}</p>
	{:else}
		<div class="space-y-6">
			{#each data.posts as post}
				<article class="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-3">
					<div class="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{post.date}</div>
					<h2 class="text-2xl font-bold text-slate-900 dark:text-white">{post.title}</h2>
					<p class="text-slate-700 dark:text-slate-300 font-medium">{post.summary}</p>
					<div class="feed-post-content text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-700/60">{@html post.content}</div>
				</article>
			{/each}
		</div>
	{/if}
</section>

<style>
	.feed-post-content :global(p) {
		margin: 0.5rem 0;
	}
	.feed-post-content :global(a) {
		color: rgb(37 99 235);
		text-decoration: underline;
	}
	:global(.dark) .feed-post-content :global(a) {
		color: rgb(96 165 250);
	}
</style>
