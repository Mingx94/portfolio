<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import './styles.css';
</script>

<Header />

<main class="pt-64px min-h-[calc(100%_-_80px)] bg-rose-50 flex flex-col [&>*]:w-full [&>*]:flex-1">
	<slot />
</main>

<Footer />