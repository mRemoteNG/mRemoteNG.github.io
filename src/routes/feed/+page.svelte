<script lang="ts">
	import { t } from '$lib/i18n/store';

	let { data } = $props();

	const PAGE_SIZE = 5;

	let searchQuery = $state('');
	let currentPage = $state(1);

	const filteredPosts = $derived.by(() => {
		const query = searchQuery.trim().toLowerCase();
		if (!query) return data.posts;
		return data.posts.filter((post) =>
			[post.title, post.summary, post.content].some((field) => field?.toLowerCase().includes(query))
		);
	});

	const totalPages = $derived(Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE)));

	const pagedPosts = $derived.by(() => {
		const start = (currentPage - 1) * PAGE_SIZE;
		return filteredPosts.slice(start, start + PAGE_SIZE);
	});

	// reset to first page whenever the search query or result set changes
	$effect(() => {
		filteredPosts;
		currentPage = 1;
	});

	function goToPage(page: number) {
		currentPage = Math.min(Math.max(page, 1), totalPages);
	}
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
		<div class="mb-6">
			<input
				type="search"
				bind:value={searchQuery}
				placeholder={$t('feed.searchPlaceholder')}
				class="w-full max-w-md rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-4 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>

		{#if filteredPosts.length === 0}
			<p class="text-slate-600 dark:text-slate-400">{$t('feed.noResults')}</p>
		{:else}
			<div class="space-y-6">
				{#each pagedPosts as post}
					<article class="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-3">
						<div class="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{post.date}</div>
						<h2 class="text-2xl font-bold text-slate-900 dark:text-white">{post.title}</h2>
						<p class="text-slate-700 dark:text-slate-300 font-medium">{post.summary}</p>
						<div class="feed-post-content text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-700/60">{@html post.content}</div>
					</article>
				{/each}
			</div>

			{#if totalPages > 1}
				<div class="flex items-center justify-center gap-4 mt-8">
					<button
						type="button"
						onclick={() => goToPage(currentPage - 1)}
						disabled={currentPage === 1}
						class="px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
					>
						{$t('feed.prev')}
					</button>
					<span class="text-sm text-slate-600 dark:text-slate-400">
						{$t('feed.pageInfo', { current: String(currentPage), total: String(totalPages) })}
					</span>
					<button
						type="button"
						onclick={() => goToPage(currentPage + 1)}
						disabled={currentPage === totalPages}
						class="px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
					>
						{$t('feed.next')}
					</button>
				</div>
			{/if}
		{/if}
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
