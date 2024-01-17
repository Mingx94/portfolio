<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';
	import '../styles.css';
</script>

<Header />

<main class="min-h-[calc(100%_-_144px)] flex flex-col [&>*]:w-full [&>*]:flex-1">
	<slot />
</main>

<Footer />
