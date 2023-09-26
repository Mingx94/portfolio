<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import './styles.css';
</script>

<Header />

<main class="pt-48px pb-80px">
	<slot />
</main>

<footer class="py-12px">
	<p class="text-center text-gray-500 text-sm">
		All photos are CC BY 2.0 by <b>Michael Tsai</b>.
		<br />
		Website is licensed under <b>MIT</b>.
	</p>
</footer>
