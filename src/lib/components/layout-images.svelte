<script lang="ts">
	import { page } from '$app/stores';
	import type { GalleryItem } from '$lib/types/gallery-item';
	import Image from './image.svelte';

	export let images: GalleryItem[] = [];

	const boxSpacing = 15;
	let containerWidth = 0;

	$: layout = images.map((img) => (img.width > img.height ? 2 : 1));
</script>

<div class="gallery" bind:clientWidth={containerWidth} style:--gap={boxSpacing}>
	{#each images as img, i}
		{@const thumb = img.thumbnail ?? img}
		<a
			href="{$page.url.pathname}?index={i}"
			style:--column={layout[i]}
			class="shadow-sm bg-gray-100 inline-block rounded-md overflow-hidden isolate"
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
		display: grid;
		grid-template-columns: 1fr;
		gap: calc(var(--gap) * 1px);
	}

	.gallery a {
		grid-column: span 1;
	}

	@media (min-width: 768px) {
		.gallery {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}

		.gallery a {
			grid-column: span var(--column);
		}
	}
</style>
