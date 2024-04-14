<script lang="ts">
	import { page } from '$app/stores';
	import type { GalleryItem } from '$lib/types/gallery-item';
	import Image from './image.svelte';

	export let images: GalleryItem[] = [];
</script>

<div class="gallery">
	{#each images as img, i}
		{@const thumb = img.thumbnail ?? img}
		<a
			href="{$page.url.pathname}?index={i}"
			class="group flex aspect-square items-center justify-center overflow-hidden"
		>
			<Image
				src={thumb.src}
				alt={img.alt ?? ''}
				width={thumb.width}
				height={thumb.height}
				loading="lazy"
				class="m-[4px] max-h-[calc(100%-16px)] max-w-[calc(100%-16px)] object-contain transition-transform duration-300 group-hover:scale-[1.08]"
			/>
		</a>
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 2px;
	}

	@media (min-width: 768px) {
		.gallery {
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		}
	}
</style>
