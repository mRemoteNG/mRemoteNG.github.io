<script lang="ts">
	import { t } from '$lib/i18n/store';
	import { base } from '$app/paths';
	import { backersList, type Backer } from '$lib/config/backers';

	// Group backers by year descending (e.g. 2023, 2022, 2021)
	const years = Array.from(new Set(backersList.map((b) => b.year))).sort((a, b) => b - a);

	function getBackersByYear(year: number): Backer[] {
		return backersList.filter((b) => b.year === year);
	}
</script>

<svelte:head>
	<title>{$t('contributePage.title')} - {$t('siteTitle')}</title>
	<meta name="description" content={$t('contributePage.intro')} />
</svelte:head>

<section class="max-w-6xl mx-auto py-8 px-2 sm:px-4 space-y-12">
	<!-- Page Header -->
	<div class="text-center space-y-3">
		<h1 class="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
			{$t('contributePage.heading')}
		</h1>
		<p class="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
			{$t('contributePage.intro')}
		</p>
	</div>

	<!-- Financial Support Card (Top Center) -->
	<div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md space-y-6 text-center w-full">
		<div class="space-y-3">
			<h2 class="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-3">
				<div class="inline-flex p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-[#f4a261]">
					<i class="bi bi-heart-fill text-2xl"></i>
				</div>
				<span>{$t('contributePage.donateTitle')}</span>
			</h2>
			<p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed text-left">
				{$t('contributePage.donateText')}
			</p>
		</div>

		<!-- Contribution Action Buttons (PayPal + Ko-fi) -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2">
			<a
				href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=73S4RNSKYYZJW"
				target="_blank"
				rel="noopener"
				class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#003087] hover:bg-[#00256c] text-white font-semibold text-sm transition-colors shadow-sm whitespace-nowrap"
			>
				<i class="bi bi-paypal text-lg text-[#0079C1] bg-white rounded-full p-0.5"></i>
				<span>{$t('contributePage.paypalUSD')}</span>
			</a>
			<a
				href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H8X2R642X7GCE"
				target="_blank"
				rel="noopener"
				class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#003087] hover:bg-[#00256c] text-white font-semibold text-sm transition-colors shadow-sm whitespace-nowrap"
			>
				<i class="bi bi-paypal text-lg text-[#0079C1] bg-white rounded-full p-0.5"></i>
				<span>{$t('contributePage.paypalEUR')}</span>
			</a>
			<a
				href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DUSY3G32P3N2N"
				target="_blank"
				rel="noopener"
				class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#003087] hover:bg-[#00256c] text-white font-semibold text-sm transition-colors shadow-sm whitespace-nowrap"
			>
				<i class="bi bi-paypal text-lg text-[#0079C1] bg-white rounded-full p-0.5"></i>
				<span>{$t('contributePage.paypalGBP')}</span>
			</a>
			<a
				href="https://ko-fi.com/Q5Q41I7JS"
				target="_blank"
				rel="noopener"
				class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FF5E5B] hover:bg-[#e04b48] text-white font-bold text-sm transition-colors shadow-sm whitespace-nowrap"
			>
				<i class="bi bi-cup-hot-fill text-lg"></i>
				<span>Ko-fi</span>
				<i class="bi bi-box-arrow-up-right text-xs"></i>
			</a>
		</div>

		<p class="text-xs text-slate-500 dark:text-slate-400 italic pt-2">
			{$t('contributePage.donateDisclaimer')}
		</p>
	</div>

	<!-- 3-Column Section Underneath: Code, Translate, Ideas -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<!-- Submit Code Card -->
		<div class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md flex flex-col justify-between space-y-4">
			<div class="space-y-3">
				<div class="flex items-center gap-3">
					<div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-blue-600 dark:text-[#f4a261]">
						<i class="bi bi-code-slash text-xl"></i>
					</div>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">
						{$t('contributePage.codeTitle')}
					</h3>
				</div>
				<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
					{$t('contributePage.codeText')}
				</p>
			</div>
			<div class="pt-2 border-t border-slate-100 dark:border-slate-700/50">
				<a
					href="https://github.com/mRemoteNG/mRemoteNG"
					target="_blank"
					rel="noopener"
					class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-[#f4a261] hover:underline"
				>
					<i class="bi bi-github text-base"></i>
					<span>GitHub Repository</span>
					<i class="bi bi-box-arrow-up-right text-xs"></i>
				</a>
			</div>
		</div>

		<!-- Translate Card -->
		<div class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md flex flex-col justify-between space-y-4">
			<div class="space-y-3">
				<div class="flex items-center gap-3">
					<div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-blue-600 dark:text-[#f4a261]">
						<i class="bi bi-translate text-xl"></i>
					</div>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">
						{$t('contributePage.translateTitle')}
					</h3>
				</div>
				<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
					{$t('contributePage.translateText')}
				</p>
			</div>
			<div class="pt-2 border-t border-slate-100 dark:border-slate-700/50">
				<a
					href="https://github.com/mRemoteNG/mRemoteNG/wiki/Translate"
					target="_blank"
					rel="noopener"
					class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-[#f4a261] hover:underline"
				>
					<i class="bi bi-journal-text text-base"></i>
					<span>Translation Wiki</span>
					<i class="bi bi-box-arrow-up-right text-xs"></i>
				</a>
			</div>
		</div>

		<!-- Suggestions & Ideas Card -->
		<div class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md flex flex-col justify-between space-y-4">
			<div class="space-y-3">
				<div class="flex items-center gap-3">
					<div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-blue-600 dark:text-[#f4a261]">
						<i class="bi bi-lightbulb-fill text-xl"></i>
					</div>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">
						{$t('contributePage.ideasTitle')}
					</h3>
				</div>
				<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
					{$t('contributePage.ideasText')}
				</p>
			</div>
			<div class="pt-2 border-t border-slate-100 dark:border-slate-700/50">
				<a
					href="{base}/contact"
					class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-[#f4a261] hover:underline"
				>
					<i class="bi bi-envelope-fill text-base"></i>
					<span>{$t('contributePage.ideasLink')}</span>
					<i class="bi bi-arrow-right text-xs"></i>
				</a>
			</div>
		</div>
	</div>

	<!-- Backers Wall Section (Grouped by Year & Visual Gradation) -->
	<div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md space-y-8">
		<div class="text-center space-y-1">
			<h2 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
				<i class="bi bi-award-fill text-[#f4a261]"></i>
				<span>{$t('contributePage.backersTitle')}</span>
			</h2>
			<p class="text-sm text-slate-600 dark:text-slate-400">
				{$t('contributePage.backersSubtitle')}
			</p>
		</div>

		<div class="space-y-8 pt-2">
			{#each years as year}
				<div class="space-y-4">
					<div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700/60 pb-2">
						<span class="px-3 py-1 text-xs font-bold rounded-lg bg-blue-600 text-white dark:bg-[#f4a261] dark:text-slate-900">
							{year} {year === 2021 ? '& Earlier' : ''}
						</span>
						<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">
							{getBackersByYear(year).length} supporters
						</span>
					</div>

					<div class="flex flex-wrap gap-2.5">
						{#each getBackersByYear(year) as backer}
							{#if backer.tier === 'tier1'}
								<span
									class="px-3.5 py-1.5 rounded-xl text-sm font-bold bg-amber-500/15 text-amber-900 dark:bg-amber-400/20 dark:text-amber-200 border border-amber-300/60 dark:border-amber-500/40 shadow-xs flex items-center gap-1.5"
								>
									<i class="bi bi-star-fill text-amber-500 dark:text-[#f4a261] text-xs"></i>
									<span>{backer.name}</span>
								</span>
							{:else if backer.tier === 'tier2'}
								<span
									class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-500/10 text-slate-800 dark:bg-red-500/15 dark:text-slate-200 border border-red-300/50 dark:border-red-500/30 flex items-center gap-1"
								>
									<i class="bi bi-heart-fill text-red-500 text-[10px]"></i>
									<span>{backer.name}</span>
								</span>
							{:else}
								<span
									class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
								>
									{backer.name}
								</span>
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Bottom Section: Gratitude -->
	<div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800/90 dark:to-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-center space-y-3 shadow-inner">
		<h3 class="text-xl font-bold text-slate-900 dark:text-white">
			{$t('contributePage.thanksTitle')}
		</h3>
		<p class="text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
			{$t('contributePage.thanksText')}
		</p>
	</div>
</section>