<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../styles.css';
</script>

<Header />

<main class="flex flex-1 flex-col [&>*]:w-full [&>*]:flex-1">
	<slot />
</main>

<Footer />
