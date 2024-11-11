<script lang="ts">
	import Masonry from '$lib/components/masonry.svelte';
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

<div class="site-width px-4 pt-12 sm:px-8">
	<h1 class="mb-[10px] text-[24px] font-semibold">
		{data.albumInfo.photoset.title._content}
	</h1>
	{#if data.albumInfo.photoset.description._content}
		<p class="text-16px">
			{data.albumInfo.photoset.description._content}
		</p>
	{/if}

	<section class="">
		<Masonry loading="lazy" images={data.images}></Masonry>
	</section>
</div>
