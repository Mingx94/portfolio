<script lang="ts">
	import DialogGallery from '$lib/components/dialog-gallery.svelte';
	import LayoutImages from '$lib/components/layout-images.svelte';
	import type { GalleryItem } from '$lib/types/gallery-item';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;

	$: primaryPhoto = data.album.photoset.photo.find(
		(photo) => photo.id === data.albumInfo.photoset.primary
	)!;

	$: title = `${data.albumInfo.photoset.title._content} - Michael Tsai 📷`;
	$: description = data.albumInfo.photoset.description._content;

	$: images = data.album.photoset.photo.map((photo) => {
		return {
			src: photo.url_o,
			width: photo.width_o,
			height: photo.height_o,
			alt: photo.title,
			photoId: photo.id,
			thumbnail: {
				src: photo.url_w,
				width: photo.width_w,
				height: photo.height_w
			}
		} satisfies GalleryItem;
	});
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta
		property="og:url"
		content="https://coding-shutter.blog/albums/{data.albumInfo.photoset.id}"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={primaryPhoto.url_m} />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="400" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={primaryPhoto.url_m} />
</svelte:head>

<div class="max-w-50rem mx-auto py-40px px-20px sm:px-40px">
	<h1 class="text-24px font-600 mb-10px">
		{data.albumInfo.photoset.title._content}
	</h1>
	{#if data.albumInfo.photoset.description._content}
		<p class="text-16px">
			{data.albumInfo.photoset.description._content}
		</p>
	{/if}
</div>
<section class="max-w-50rem mx-auto px-5px sm:px-25px" in:fade={{ duration: 300 }}>
	<LayoutImages {images} />
</section>

<DialogGallery {images} />
