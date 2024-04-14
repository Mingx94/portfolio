<script lang="ts">
	export let src: string;
	export let alt: string;

	import { onMount } from 'svelte';

	let loaded = false;
	let thisImage: HTMLImageElement;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img
	{src}
	{alt}
	class:loaded
	bind:this={thisImage}
	{...$$restProps}
	class="opacity-0 transition-opacity duration-[1.2s] ease-out {$$props.class}"
	class:opacity-100={loaded}
/>
