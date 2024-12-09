<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

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
	<Icon
		icon="iconoir:refresh"
		class="animate-duration-[1500ms] animate-infinite animate-ease-in-out absolute top-0 right-0 size-6 animate-spin text-white/80"
	/>
{/if}
