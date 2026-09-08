<script lang="ts">
	import { t } from '$lib/i18n/store';
	import { releaseDownloads } from '$lib/config/downloads';
</script>

<svelte:head>
	<title>{$t('downloads.title')} - {$t('siteTitle')}</title>
	<meta name="description" content={$t('downloads.subtitle')} />
</svelte:head>

<section class="downloads-page py-6">
  <h1 class="text-3xl font-bold mb-2 text-slate-900 dark:text-white">{$t('downloads.title')}</h1>
  <p class="text-slate-600 dark:text-slate-400 mb-6">{$t('downloads.description')}</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each releaseDownloads as release}
      <article class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span
              class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full {release.badgeType === 'stable' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200' : release.badgeType === 'preview' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200'}"
            >
              {$t(`downloads.${release.channelKey}`)}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">{release.date}</span>
          </div>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">{release.version}</h2>
        </div>

        <div class="space-y-3 pt-2">
          <div class="grid grid-cols-2 gap-2">
            <a class="px-3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs rounded-xl text-center transition-colors shadow-sm flex items-center justify-center gap-1.5" href={release.msiUrl}>
              <i class="bi bi-download"></i>
              <span>{$t('downloads.msi')}</span>
            </a>
            <a class="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-medium text-xs rounded-xl text-center transition-colors shadow-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-1.5" href={release.zipUrl}>
              <i class="bi bi-file-earmark-zip"></i>
              <span>{$t('downloads.zip')}</span>
            </a>
          </div>
          <a class="block text-xs text-[#f4a261] dark:text-[#f4a261] hover:underline font-medium text-center pt-1" href={release.changelogUrl} target="_blank" rel="noopener">
            {$t('downloads.changelog')}
          </a>
        </div>
      </article>
    {/each}
  </div>
</section>
