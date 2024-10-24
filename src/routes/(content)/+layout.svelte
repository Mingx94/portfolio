<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />

<main class="flex flex-1 flex-col [&>*]:w-full [&>*]:flex-1">
	{@render children?.()}
</main>

<Footer />
