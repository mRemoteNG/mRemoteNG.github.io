<script>
	import { t } from '$lib/i18n/store.js';
	import { base } from '$app/paths';
	const currentYear = new Date().getFullYear();
</script>

<footer id="main-footer" class='footer fixed-bottom mt-auto py-3 bg-dark text-light'>
	<div class='container d-flex justify-content-between align-items-center'>
		<div id="copyright">
			<p>&copy; {currentYear} {$t('footer.rights')}</p>
			<p>mRemoteNG is open source software and is released under the terms of the <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html">GNU General Public License Version 2</a>.</p>
		</div>
		<div id="ssl-seal">
			<img style="cursor: pointer; width: 211px; height: 64px;" src="{base}/images/certum_pl_dv.svg" alt="Certum SSL Seal">
		</div>
	</div>
</footer>

