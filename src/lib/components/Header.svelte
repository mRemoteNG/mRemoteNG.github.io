<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { t } from '$lib/i18n/store';

	const menuItems = [
		{ titleKey: 'header.about', path: `/` },
		{ titleKey: 'header.feed', path: `/feed` },
		{ titleKey: 'header.contribute', path: `/contribute` },
		{ titleKey: 'header.contact', path: `/contact` }
	];

	let mobileMenuOpen = false;
	let isDropdownOpen = false;
	let dropdownRef: HTMLDivElement;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	const socialLinks = [
		{ name: 'Discussions', icon: 'bi bi-chat-square-text-fill', url: 'https://github.com/orgs/mRemoteNG/discussions', tooltip: 'GitHub Discussions' },
		{ name: 'Reddit', icon: 'bi bi-reddit', url: 'https://www.reddit.com/r/mRemoteNG/', tooltip: 'Reddit' },
		{ name: 'X (Twitter)', icon: 'bi bi-twitter-x', url: 'https://x.com/mremoteng', tooltip: 'X' },
		{ name: 'Element Chat', icon: 'bi bi-chat-dots-fill', url: 'https://matrix.to/#/#mRemoteNG_PublicChat:gitter.im', tooltip: 'Element Chat' }
	];

	const toggleDropdown = () => {
		isDropdownOpen = !isDropdownOpen;
	};

	function handleClickOutside(event: MouseEvent) {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			isDropdownOpen = false;
		}
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-[#CBD5E1]/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-sm">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Left Side: Brand + Left Menu -->
			<div class="flex items-center gap-1 lg:gap-1.5 xl:gap-2 shrink-0">
				<!-- Brand Logo -->
				<a href="{base}/" class="group brand-font text-2xl tracking-wide flex items-center gap-0.5 whitespace-nowrap shrink-0 pr-1 lg:pr-2" on:click={closeMobileMenu}>
					<span class="text-blue-600 dark:text-[#f4a261] group-hover:text-blue-500 dark:group-hover:text-[#f6b27d] transition-colors">m</span><span class="text-slate-900 dark:text-white group-hover:text-blue-400 dark:group-hover:text-[#f8c499] transition-colors">RemoteNG</span>
				</a>

				<!-- Left Aligned Navigation Menu -->
				<nav class="hidden lg:flex items-center gap-0">
					{#each menuItems as item}
						<a
							href="{base}{item.path}"
							class="px-1.5 py-1 xl:px-2 xl:py-1.5 rounded-lg text-xs xl:text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-300/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70 transition-colors whitespace-nowrap"
							class:text-blue-600={page.url.pathname === (base + item.path).replace(/\/$/, '') || (page.url.pathname === base && item.path === '/')}
							class:dark:text-[#f4a261]={page.url.pathname === (base + item.path).replace(/\/$/, '') || (page.url.pathname === base && item.path === '/')}
							class:font-semibold={page.url.pathname === (base + item.path).replace(/\/$/, '') || (page.url.pathname === base && item.path === '/')}
						>
							{$t(item.titleKey)}
						</a>
					{/each}
				</nav>
			</div>

			<!-- Right Side Actions Menu -->
			<div class="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0">
				<!-- Download -->
				<a rel="noopener" class="px-1.5 py-1 xl:px-2 xl:py-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-300/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70 transition-colors flex items-center gap-1 text-xs xl:text-sm font-medium whitespace-nowrap" href="{base}/downloads" title="Download">
					<i class="bi bi-download text-base xl:text-lg text-blue-600 dark:text-[#f4a261]"></i>
					<span>{$t('header.downloads')}</span>
				</a>

				<!-- GitHub -->
				<a target="_blank" rel="noopener" class="px-1.5 py-1 xl:px-2 xl:py-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-300/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70 transition-colors flex items-center gap-1 text-xs xl:text-sm font-medium whitespace-nowrap" href="https://github.com/mRemoteNG/mRemoteNG" title="GitHub">
					<i class="bi bi-github text-base xl:text-lg text-blue-600 dark:text-[#f4a261]"></i>
					<span>GitHub</span>
				</a>

				<!-- Community / Social Dropdown (Reddit, X, Element Chat) -->
				<div class="relative" bind:this={dropdownRef} on:mouseleave={() => (isDropdownOpen = false)}>
					<button
						type="button"
						class="px-1.5 py-1 xl:px-2 xl:py-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-300/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70 transition-colors flex items-center gap-1 text-xs xl:text-sm font-medium cursor-pointer whitespace-nowrap"
						title={$t('header.community')}
						aria-expanded={isDropdownOpen}
						on:click={toggleDropdown}
					>
						<i class="bi bi-share text-base xl:text-lg text-blue-600 dark:text-[#f4a261]"></i>
						<span>{$t('header.community')}</span>
						<i class="bi {isDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-xs text-slate-500 dark:text-slate-400"></i>
					</button>

					{#if isDropdownOpen}
						<div class="absolute right-0 mt-2 w-48 bg-slate-200 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-800 rounded-xl shadow-2xl py-1 z-50">
							{#each socialLinks as link}
								<a
									class="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-300/60 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white transition-colors whitespace-nowrap"
									target="_blank"
									rel="noopener"
									title={link.tooltip}
									href={link.url}
									on:click={() => (isDropdownOpen = false)}
								>
									<i class="{link.icon} text-blue-600 dark:text-[#f4a261]"></i>
									<span>{link.name}</span>
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Docs -->
				<a target="_blank" rel="noopener" class="px-1.5 py-1 xl:px-2 xl:py-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-300/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70 transition-colors flex items-center gap-1 text-xs xl:text-sm font-medium whitespace-nowrap" href="https://mremoteng.readthedocs.io/en/v1.77.3-dev/" title="Docs">
					<i class="bi bi-file-text-fill text-base xl:text-lg text-blue-600 dark:text-[#f4a261]"></i>
					<span>{$t('header.documentation')}</span>
				</a>

				<div class="h-5 w-px bg-slate-400/40 dark:bg-white/20 mx-0.5 xl:mx-1"></div>

				<LanguageSwitcher />

				<div class="h-5 w-px bg-slate-400/40 dark:bg-white/20 mx-0.5 xl:mx-1"></div>

				<ThemeSwitcher />
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center gap-2 lg:hidden">
				<ThemeSwitcher />
				<button
					type="button"
					on:click={toggleMobileMenu}
					class="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-300/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 focus:outline-none"
					aria-label="Toggle navigation"
				>
					<i class="bi {mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl"></i>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu Dropdown -->
	{#if mobileMenuOpen}
		<div class="lg:hidden border-t border-slate-300 dark:border-slate-800 bg-[#CBD5E1] dark:bg-[#0F172A] px-4 pt-3 pb-6 space-y-3">
			<nav class="flex flex-col gap-1">
				{#each menuItems as item}
					<a
						href="{base}{item.path}"
						on:click={closeMobileMenu}
						class="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-300/60 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
						class:text-blue-600={page.url.pathname === (base + item.path).replace(/\/$/, '') || (page.url.pathname === base && item.path === '/')}
						class:dark:text-[#f4a261]={page.url.pathname === (base + item.path).replace(/\/$/, '') || (page.url.pathname === base && item.path === '/')}
					>
						{$t(item.titleKey)}
					</a>
				{/each}
			</nav>

			<div class="pt-3 border-t border-slate-300 dark:border-slate-800 flex flex-col gap-2">
				<a rel="noopener" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-300/60 dark:text-slate-200 dark:hover:bg-slate-800" href="{base}/downloads" on:click={closeMobileMenu}>
					<i class="bi bi-download text-lg text-blue-600 dark:text-[#f4a261]"></i>
					<span>{$t('header.downloads')}</span>
				</a>
				<a target="_blank" rel="noopener" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-300/60 dark:text-slate-200 dark:hover:bg-slate-800" href="https://github.com/mRemoteNG/mRemoteNG" on:click={closeMobileMenu}>
					<i class="bi bi-github text-lg text-blue-600 dark:text-[#f4a261]"></i>
					<span>GitHub</span>
				</a>

				<div class="border-t border-slate-300 dark:border-slate-800 pt-2 my-1">
					<div class="px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
						{$t('header.community')}
					</div>
					{#each socialLinks as link}
						<a
							target="_blank"
							rel="noopener"
							class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-300/60 dark:text-slate-200 dark:hover:bg-slate-800"
							href={link.url}
							on:click={closeMobileMenu}
						>
							<i class="{link.icon} text-lg text-blue-600 dark:text-[#f4a261]"></i>
							<span>{link.name}</span>
						</a>
					{/each}
				</div>

				<a target="_blank" rel="noopener" class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-300/60 dark:text-slate-200 dark:hover:bg-slate-800" href="https://mremoteng.readthedocs.io/en/v1.77.3-dev/" on:click={closeMobileMenu}>
					<i class="bi bi-file-text-fill text-lg text-blue-600 dark:text-[#f4a261]"></i>
					<span>{$t('header.documentation')}</span>
				</a>

				<div class="pt-2 border-t border-slate-300 dark:border-slate-800 flex items-center justify-between">
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	{/if}
</header>