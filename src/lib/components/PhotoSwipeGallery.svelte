<script context="module" lang="ts">
	export interface GalleryItem {
		src: string;
		thumbnail?: {
			src: string;
			width: number;
			height: number;
		};
		width: number;
		height: number;
		cropped?: boolean;
		alt?: string;
	}
	export type GalleryData = Array<GalleryItem>;
</script>

<script>
	// @ts-nocheck
	import justifiedLayout from 'justified-layout';
	import PhotoSwipe from 'photoswipe';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let images;
	export let individual = false;

	const boxSpacing = 10;
	let element;
	let containerWidth = element?.clientWidth ?? 0;

	const options = writable(undefined);
	$: {
		// update opts on any change to config params as well as
		// to image data (otherwise we risk triggering weird pswp bugs)

		if (!element || !Array.isArray(images)) break $;

		const opts = { pswpModule: PhotoSwipe };
		if (individual) {
			opts.gallery = element.childNodes;
		} else {
			opts.children = element.childNodes;
			opts.gallery = element;
		}
		$options = opts;
	}

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

	onMount(() => {
		const resizeObserver = new ResizeObserver(() => {
			containerWidth = element.clientWidth;
		});
		resizeObserver.observe(element);

		return () => {
			resizeObserver.disconnect();
		};
	});

	onMount(() => {
		let lightbox;
		// on each update, destroy any previous lightbox (to avoid weird bugs) and init new lightbox with new opts
		// note that subscribe runs the function immediately for the first time
		const unsub = options.subscribe((opts) => {
			lightbox?.destroy?.();
			if (opts === undefined) return;
			lightbox = new PhotoSwipeLightbox(opts);
			lightbox.init();
		});

		return () => {
			unsub();
			lightbox?.destroy?.();
		};
	});
</script>

<div class="gallery" bind:this={element} style:--gap={boxSpacing}>
	{#each images as img, i}
		{@const thumb = img.thumbnail ?? img}
		<a
			href={img.src}
			data-pswp-width={img.width}
			data-pswp-height={img.height}
			target="_blank"
			style:--width={layout.boxes[i].width}
			style:--height={layout.boxes[i].height}
		>
			<img src={thumb.src} alt={img.alt ?? ''} width={thumb.width} height={thumb.height} />
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
	a {
		display: inline-block;
		width: calc(var(--width) * 1px);
		height: calc(var(--height) * 1px);
	}
	img {
		vertical-align: bottom;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
