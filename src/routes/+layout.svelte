<script lang="ts">
	import '../styles.css';
	import 'lite-youtube-embed/src/lite-yt-embed.css';

	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	$effect(() => {
		void import('lite-youtube-embed');
	});

	let { children } = $props();
</script>

<Header />

<main class="flex flex-1 flex-col [&>*]:w-full [&>*]:flex-1">
	{@render children()}
</main>

<Footer />
