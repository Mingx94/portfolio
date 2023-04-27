<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';
	import Analytics from '$lib/components/Analytics.svelte';
	import Header from '$lib/components/Header.svelte';
	import { webVitals } from '$lib/vitals';
	import { inject } from '@vercel/analytics';
	import 'overlayscrollbars/overlayscrollbars.css';
	import './styles.css';
	import Gtm from '$lib/components/GTM.svelte';

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Gtm />
<Analytics />
<Header />
<div class="page-container">
	<main class="page-wrapper">
		<slot />
	</main>
</div>

<style>
	.page-container {
		width: 100%;
		height: 100%;
	}
</style>
