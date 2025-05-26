<script>
	import { t } from '$lib/i18n/store.js';
	const currentYear = new Date().getFullYear();
</script>

<footer id="main-footer" class='footer fixed-bottom mt-auto py-3 bg-dark text-light'>
	<div class='container d-flex justify-content-between align-items-center'>
		<div id="copyright">
			<p>&copy; {currentYear} {$t('footer.rights')}</p>
		</div>
		<div id="ssl-seal">
			<img style="cursor: pointer; width: 211px; height: 64px;" src="https://sslseal.certum.pl/seal/public/img/certum_pl_dv.svg" alt="Certum SSL Seal">
		</div>
	</div>
</footer>

