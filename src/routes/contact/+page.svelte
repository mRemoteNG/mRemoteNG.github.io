<script>
	import { t } from '$lib/i18n/store.js';

	function handleSubmit() {
		alert($t('contactPage.formAlert'));
	}
</script>

<svelte:head>
	<title>{$t('contactPage.title')} - {$t('siteTitle')}</title>
	<meta name="description" content={$t('contactPage.heading')} />
</svelte:head>

<section>
	<h1>{$t('contactPage.heading')}</h1>
	<p>{$t('contactPage.intro')}</p>
	<form class="contact-form" on:submit|preventDefault={handleSubmit}>
		<div>
			<label for="name">{$t('contactPage.formName')}</label>
			<input type="text" id="name" name="name" required>
		</div>
		<div>
			<label for="email">{$t('contactPage.formEmail')}</label>
			<input type="email" id="email" name="email" required>
		</div>
		<div>
			<label for="message">{$t('contactPage.formMessage')}</label>
			<textarea id="message" name="message" rows="4" required></textarea>
		</div>
		<button type="submit" class="generic-button">{$t('contactPage.formSend')}</button>
	</form>
</section>