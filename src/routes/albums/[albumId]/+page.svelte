<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import { siteName, siteUrl, twitterHandle } from '$lib/site/config';

	let { data } = $props();

	const primaryPhoto = data.album.photoset.photo.find(
		(photo) => photo.id === data.albumInfo.photoset.primary
	)!.url_m;

	const title = data.albumInfo.photoset.title._content;
	const description = data.albumInfo.photoset.description._content;
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- OG Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={primaryPhoto} />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="400" />

	<!-- Twitter Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={primaryPhoto} />

	{#each data.images as image, i}
		<link rel="prefetch" href={image.src} />
	{/each}
</svelte:head>

<div class="container px-4 pt-12 sm:px-8">
	<h1 class="mb-[10px] text-[24px] font-semibold">
		{data.albumInfo.photoset.title._content}
	</h1>
	{#if data.albumInfo.photoset.description._content}
		<p class="text-16px">
			{data.albumInfo.photoset.description._content}
		</p>
	{/if}
</div>

<section class="container px-4 py-12 sm:px-8">
	<div class="gallery">
		{#each data.images as img, i}
			{@const thumb = img.thumbnail ?? img}
			<Image
				src={thumb.src}
				alt={img.alt ?? ''}
				width={thumb.width}
				height={thumb.height}
				loading="lazy"
				class="m-[4px] max-h-[calc(100%-16px)] max-w-[calc(100%-16px)] object-contain transition-transform duration-[0.15s] group-hover:scale-[1.08]"
			/>
		{/each}
	</div>
</section>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: 2px;
	}

	@media (min-width: 768px) {
		.gallery {
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		}
	}
</style>
