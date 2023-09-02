<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import './styles.css';
</script>

<Header />

<main class="pb-80px">
	<slot />
</main>
