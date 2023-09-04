<script lang="ts">
	import { page } from '$app/stores';
	import type { GalleryItem } from '$lib/types/GalleryItem';
	import justifiedLayout from 'justified-layout';
	import Image from './Image.svelte';

	export let images: GalleryItem[] = [];

	const boxSpacing = 15;
	let containerWidth = 0;

	$: layout = justifiedLayout(
		images.map((img) => ({
			width: img.width,
			height: img.height
		})),
		{
			containerPadding: boxSpacing,
			containerWidth,
			boxSpacing
		}
	);
</script>

<div class="gallery" bind:clientWidth={containerWidth} style:--gap={boxSpacing}>
	{#each images as img, i}
		{@const thumb = img.thumbnail ?? img}
		<a
			href="{$page.url.pathname}?index={i}"
			style:--width={layout.boxes[i].width}
			style:--height={layout.boxes[i].height}
			class="shadow-sm bg-gray-100 inline-block w-[calc(var(--width)*1px)] h-[calc(var(--height)*1px)]"
		>
			<Image
				src={thumb.src}
				alt={img.alt ?? ''}
				width={thumb.width}
				height={thumb.height}
				loading="lazy"
				class="object-cover w-full h-full rounded-md"
			/>
		</a>
	{/each}
</div>

<style>
	.gallery {
		display: flex;
		flex-wrap: wrap;
		padding-left: calc(var(--gap) * 1px);
		gap: calc(var(--gap) * 1px);
	}
</style>
