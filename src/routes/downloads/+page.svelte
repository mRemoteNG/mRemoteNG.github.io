<script lang="ts">
  import { currentLocale, t } from '$lib/i18n/store';
  import { releaseDownloads, latestPuttyRelease, olderPuttyReleases } from '$lib/config/downloads';

  let showOlderPutty = false;

  const dateLabels = {
    en: {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      format: (month: string, day: number, year: number) => `${month} ${day}, ${year}`
    },
    de: {
      months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      format: (month: string, day: number, year: number) => `${day}. ${month} ${year}`
    },
    ru: {
      months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      format: (month: string, day: number, year: number) => `${day} ${month} ${year}`
    },
    lt: {
      months: ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio', 'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio'],
      format: (month: string, day: number, year: number) => `${year} m. ${month} ${day} d.`
    }
  };

  function formatDownloadDate(date: string, locale: string) {
    const labels = dateLabels[locale as keyof typeof dateLabels] ?? dateLabels.en;
    const parsedDate = new Date(`${date}T00:00:00Z`);

    return labels.format(
      labels.months[parsedDate.getUTCMonth()],
      parsedDate.getUTCDate(),
      parsedDate.getUTCFullYear()
    );
  }
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
              class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full {release.badgeType === 'stable' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200' : release.badgeType === 'preview' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200'}"
            >
              <span aria-hidden="true" class="text-sm leading-none">
                {release.badgeType === 'stable' ? '⛰️' : release.badgeType === 'preview' ? '🔭' : '🦉'}
              </span>
              <span>{$t(`downloads.${release.channelKey}`)}</span>
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">{formatDownloadDate(release.date, $currentLocale)}</span>
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

  <div class="mt-12 pt-8 border-t border-slate-300 dark:border-slate-800 space-y-6">
    <div>
      <div class="flex items-center gap-2 mb-1">
        <i class="bi bi-terminal-fill text-xl text-blue-600 dark:text-[#f4a261]"></i>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">{$t('downloads.puttyTitle')}</h2>
      </div>
      <p class="text-slate-600 dark:text-slate-400 text-sm">{$t('downloads.puttySubtitle')}</p>
    </div>

    <article class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 text-xs font-bold uppercase rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200">
            {$t('downloads.latestPutty')}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">{formatDownloadDate(latestPuttyRelease.date, $currentLocale)}</span>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">{latestPuttyRelease.title}</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">{latestPuttyRelease.version}</p>
      </div>

      <div class="flex items-center gap-3 shrink-0 w-full sm:w-auto">
        <a
          href={latestPuttyRelease.releasePageUrl}
          target="_blank"
          rel="noopener"
          class="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 text-xs font-semibold border border-slate-200 dark:border-slate-600 transition-colors flex items-center gap-1.5"
        >
          <i class="bi bi-github"></i>
          <span>{$t('downloads.releaseNotes')}</span>
        </a>
        <a
          href={latestPuttyRelease.downloadUrl}
          class="flex-1 sm:flex-initial px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <i class="bi bi-download"></i>
          <span>{$t('downloads.downloadPutty')}</span>
        </a>
      </div>
    </article>

    <div>
      <button
        type="button"
        on:click={() => (showOlderPutty = !showOlderPutty)}
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-[#f4a261] hover:underline cursor-pointer focus:outline-none"
      >
        <i class="bi {showOlderPutty ? 'bi-chevron-up' : 'bi-chevron-down'} text-xs"></i>
        <span>{showOlderPutty ? $t('downloads.hideOlderPuttyReleases') : $t('downloads.olderPuttyReleases')}</span>
      </button>

      {#if showOlderPutty}
        <div class="mt-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-700/60">
          {#each olderPuttyReleases as puttyRelease}
            <div class="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div class="flex items-center gap-3">
                <i class="bi bi-file-earmark-exec-fill text-blue-600 dark:text-[#f4a261] text-lg"></i>
                <div>
                  <a href={puttyRelease.releasePageUrl} target="_blank" rel="noopener" class="font-bold text-slate-900 dark:text-white text-sm hover:underline">
                    {puttyRelease.title}
                  </a>
                  <span class="text-xs text-slate-500 dark:text-slate-400 ml-2">{puttyRelease.version}</span>
                </div>
              </div>

              <div class="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-1 sm:pt-0">
                <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">{formatDownloadDate(puttyRelease.date, $currentLocale)}</span>
                <a
                  href={puttyRelease.downloadUrl}
                  class="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <i class="bi bi-download"></i>
                  <span>puttyng.exe</span>
                </a>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>
