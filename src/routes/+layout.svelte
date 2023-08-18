<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import 'overlayscrollbars/overlayscrollbars.css';
	import './styles.css';
</script>

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
