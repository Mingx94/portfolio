<script lang="ts">
	import { onMount } from 'svelte';
	interface Props {
		src: string;
		alt: string;
		[key: string]: any;
	}

	let { src, alt, ...props }: Props = $props();

	let loaded = $state(false);
	let thisImage!: HTMLImageElement;
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
	{...props}
	class="opacity-0 transition-opacity duration-[1.2s] ease-out {props.class}"
	class:opacity-100={loaded}
/>
