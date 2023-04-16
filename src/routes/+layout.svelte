<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';
	import Analytics from '$lib/analytics.svelte';
	import Header from '$lib/components/Header.svelte';
	import { webVitals } from '$lib/vitals';
	import { inject } from '@vercel/analytics';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import 'overlayscrollbars/overlayscrollbars.css';
	import type { LayoutServerData } from './$types';
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

	export let data: LayoutServerData;
</script>

<Analytics />
<Header />
<OverlayScrollbarsComponent
	class="os-wrapper"
	options={{
		scrollbars: {
			theme: 'os-theme-dark',
			autoHide: 'move',
			autoHideDelay: 1000
		}
	}}
>
	<div class="page-container">
		{#key data.pathname}
			<main class="page-wrapper">
				<slot />
			</main>
		{/key}
	</div>
</OverlayScrollbarsComponent>

<style>
	.page-container {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: minmax(0, 1fr);
		width: 100%;
		height: 100%;
	}
	.page-wrapper {
		grid-row-start: 1;
		grid-column-start: 1;
	}
	:global(.os-wrapper) {
		width: 100%;
		flex: 1 1 0;
	}
</style>
