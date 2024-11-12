<script lang="ts">
	import { cn } from '$lib/utils';

	import type { HTMLImgAttributes } from 'svelte/elements';

	let {
		src,
		srcFallback,
		alt,
		...props
	}: HTMLImgAttributes & {
		srcFallback: string;
	} = $props();

	let loaded = $state(false);
</script>

<img
	{src}
	{alt}
	{...props}
	class={cn(!loaded && 'absolute opacity-0', props.class)}
	onload={() => {
		loaded = true;
	}}
/>

<img src={srcFallback} {alt} {...props} class={cn(loaded && 'hidden', props.class)} />

{#if !loaded}
	<div
		class="i-iconoir-refresh absolute right-0 top-0 size-6 animate-spin text-white/80 animate-duration-[1500ms] animate-infinite animate-ease-in-out"
	></div>
{/if}
