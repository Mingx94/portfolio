<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';
	import Analytics from '$lib/analytics.svelte';
	import Header from '$lib/components/Header.svelte';
	import { webVitals } from '$lib/vitals';
	import { inject } from '@vercel/analytics';
	import 'overlayscrollbars/overlayscrollbars.css';
	import './styles.css';

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
