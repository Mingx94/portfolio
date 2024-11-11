<script lang="ts">
	import { cn } from '$lib/utils';

	import type { HTMLImgAttributes } from 'svelte/elements';

	let { src, alt, ...props }: HTMLImgAttributes = $props();

	let loaded = $state(false);
	let thisImage!: HTMLImageElement;
</script>

<img
	{src}
	{alt}
	bind:this={thisImage}
	{...props}
	class={cn('transition-opacity duration-[1.2s] ease-out', !loaded && 'opacity-0', props.class)}
	onload={() => {
		loaded = true;
	}}
/>
