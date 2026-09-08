<script lang="ts">
	import { t } from '$lib/i18n/store.js';

	let name = '';
	let email = '';
	let message = '';
	let errorMessage = '';
	let successMessage = '';
	let isSubmitting = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		errorMessage = '';
		successMessage = '';

		const trimmedName = name.trim();
		const trimmedEmail = email.trim();
		const trimmedMessage = message.trim();

		if (!trimmedName || !trimmedEmail || !trimmedMessage) {
			errorMessage = $t('contactPage.errRequired');
			return;
		}

		const wordCount = trimmedMessage.split(/\s+/).filter(Boolean).length;
		if (wordCount < 5) {
			errorMessage = $t('contactPage.errMinWords');
			return;
		}

		isSubmitting = true;

		try {
			const response = await fetch('https://formsubmit.co/ajax/support@mremote.org', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					name: trimmedName,
					email: trimmedEmail,
					message: trimmedMessage,
					_subject: `mRemoteNG Contact Form: ${trimmedName}`
				})
			});

			if (response.ok) {
				successMessage = $t('contactPage.formAlert');
				name = '';
				email = '';
				message = '';
			} else {
				errorMessage = $t('contactPage.errSend');
			}
		} catch (e) {
			errorMessage = $t('contactPage.errSend');
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>{$t('contactPage.title')} - {$t('siteTitle')}</title>
	<meta name="description" content={$t('contactPage.heading')} />
</svelte:head>

<section class="max-w-xl mx-auto py-6">
	<h1 class="text-3xl font-bold mb-2 text-slate-900 dark:text-white">{$t('contactPage.heading')}</h1>
	<p class="text-slate-600 dark:text-slate-400 mb-6">{$t('contactPage.intro')}</p>

	{#if errorMessage}
		<div class="p-3.5 mb-4 rounded-xl bg-red-100 border border-red-300 text-red-800 dark:bg-red-950/60 dark:border-red-800 dark:text-red-200 text-sm font-medium flex items-center gap-2">
			<i class="bi bi-exclamation-triangle-fill text-base shrink-0"></i>
			<span>{errorMessage}</span>
		</div>
	{/if}

	{#if successMessage}
		<div class="p-3.5 mb-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-200 text-sm font-medium flex items-center gap-2">
			<i class="bi bi-check-circle-fill text-base shrink-0"></i>
			<span>{successMessage}</span>
		</div>
	{/if}

	<form class="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4" on:submit={handleSubmit}>
		<div>
			<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="name">{$t('contactPage.formName')} *</label>
			<input class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50" type="text" id="name" name="name" bind:value={name} disabled={isSubmitting} required>
		</div>
		<div>
			<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="email">{$t('contactPage.formEmail')} *</label>
			<input class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50" type="email" id="email" name="email" bind:value={email} disabled={isSubmitting} required>
		</div>
		<div>
			<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" for="message">{$t('contactPage.formMessage')} *</label>
			<textarea class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50" id="message" name="message" rows="4" bind:value={message} disabled={isSubmitting} required></textarea>
		</div>
		<button type="submit" disabled={isSubmitting} class="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors shadow-sm cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2">
			{#if isSubmitting}
				<i class="bi bi-arrow-repeat text-lg animate-spin"></i>
				<span>{$t('contactPage.sending')}</span>
			{:else}
				<span>{$t('contactPage.formSend')}</span>
			{/if}
		</button>
	</form>
</section>