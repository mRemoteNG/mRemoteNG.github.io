<script lang="ts">
	import { t } from '$lib/i18n/store';
	import { base } from '$app/paths';
	const currentYear = new Date().getFullYear();
</script>

<footer id="main-footer" class="w-full mt-auto py-3.5 bg-[#CBD5E1] dark:bg-[#0F172A] text-slate-700 dark:text-slate-300 border-t border-slate-300 dark:border-slate-800 transition-colors">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
		<div id="copyright" class="text-xs text-center md:text-left leading-tight">
			<p>&copy; {currentYear} {$t('footer.rights')} &bull; Released under <a class="text-blue-600 dark:text-[#f4a261] hover:underline" href="https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html" target="_blank" rel="noopener">GNU GPL v2</a>.</p>
		</div>
		<div id="ssl-seal" class="shrink-0">
			<img class="h-10 w-auto cursor-pointer" src="{base}/images/certum_pl_dv.svg" alt="Certum SSL Seal">
		</div>
	</div>
</footer>

