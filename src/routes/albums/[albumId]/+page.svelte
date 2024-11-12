<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import Masonry from '$lib/components/masonry.svelte';
	import { siteName, siteUrl, twitterHandle } from '$lib/site/config';
	import { createDialog, melt } from '@melt-ui/svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let { data } = $props();

	const primaryPhoto = data.album.photoset.photo.find(
		(photo) => photo.id === data.albumInfo.photoset.primary
	)!.url_m;

	const metaTitle = data.albumInfo.photoset.title._content;
	const metaDescription = data.albumInfo.photoset.description._content;

	const {
		elements: { portalled, overlay, content, title, description, close },
		states: { open }
	} = createDialog();

	let emblaApi: EmblaCarouselType;
	let options: EmblaOptionsType = $state({
		loop: true,
		startIndex: 0
	});

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
	}

	function onOpen(i: number) {
		$open = true;
		options.startIndex = i;
	}
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />

	<!-- OG Tags -->
	<meta property="og:title" content={metaTitle} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content={primaryPhoto} />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="400" />

	<!-- Twitter Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDescription} />
	<meta name="twitter:image" content={primaryPhoto} />

	{#each data.images as image, i}
		<link rel="prefetch" href={image.src} />
	{/each}
</svelte:head>

<div class="site-width px-4 pt-12 sm:px-8">
	<h1 class="mb-[10px] text-[24px] font-semibold">
		{data.albumInfo.photoset.title._content}
	</h1>
	{#if data.albumInfo.photoset.description._content}
		<p class="text-16px">
			{data.albumInfo.photoset.description._content}
		</p>
	{/if}

	<section>
		<Masonry loading="lazy" images={data.images} onclick={onOpen}></Masonry>
	</section>
</div>

{#if $open}
	<div use:melt={$portalled}>
		<div use:melt={$overlay} class="fixed inset-0 z-50 bg-black/80"></div>

		<div
			use:emblaCarouselSvelte={{ options, plugins: [] }}
			onemblaInit={onInit}
			use:melt={$content}
			class="embla fixed left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2"
		>
			<div class="embla__container">
				{#each data.images as image}
					<div class="embla__slide">
						<Image
							src={image.src}
							alt={image.alt}
							srcFallback={image.thumbnail.src}
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
		</div>

		<button
			class="fixed -left-0 top-1/2 z-50 flex -translate-y-1/2 translate-x-2 rounded-sm bg-zinc-900 p-3 text-white sm:rounded-lg sm:p-3"
			onclick={() => emblaApi!.scrollPrev()}
			aria-label="Previous"
			use:melt={$content}
		>
			<span class="i-iconoir-arrow-left m-auto size-8 sm:size-10"></span>
		</button>
		<button
			class="fixed right-0 top-1/2 z-50 flex -translate-x-2 -translate-y-1/2 rounded-sm bg-zinc-900 p-3 text-white sm:rounded-lg sm:p-3"
			onclick={() => emblaApi!.scrollNext()}
			aria-label="Next"
			use:melt={$content}
		>
			<span class="i-iconoir-arrow-right m-auto size-8 sm:size-10"></span>
		</button>
	</div>
{/if}

<style>
	.embla {
		overflow: hidden;
		width: 90vw;
		height: 90dvh;
	}
	.embla__container {
		display: flex;
		width: 100%;
		height: 100%;
	}
	.embla__slide {
		flex: 0 0 100%;
		align-self: center;
		height: 100%;
		min-width: 0;
		position: relative;
	}
	.embla__slide :global(img) {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
