<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: photoServerId = data.photoInfo.photo.server;
	$: photoId = data.photoInfo.photo.id;
	$: photoSecret = data.photoInfo.photo.originalsecret || data.photoInfo.photo.secret;
	$: photoFormat = data.photoInfo.photo.originalformat || 'jpg';

	$: imageSrc = `https://live.staticflickr.com/${photoServerId}/${photoId}_${photoSecret}_o.${photoFormat}`;

	const exifInfoTags = ['ExposureTime', 'FNumber', 'ISO', 'LensModel'];

	$: exifInfos = data.photoExif.photo.exif
		.filter((exif) => exif.tagspace === 'ExifIFD')
		.filter((exif) => exifInfoTags.includes(exif.tag))
		.sort((a, b) => exifInfoTags.indexOf(a.tag) - exifInfoTags.indexOf(b.tag));
</script>

<svelte:head />

<div class="container">
	<h1>{data.photoInfo.photo.title._content}</h1>
	<p>{data.photoInfo.photo.description._content}</p>
	<details class="summary">
		<summary>Exif</summary>
		<ul class="exif-detail-list">
			<li>Camera: {data.photoExif.photo.camera}</li>
			{#each exifInfos as exif}
				<li>
					{exif.label}: {exif.raw._content}
				</li>
			{/each}
		</ul>
	</details>
</div>
<section>
	<img src={imageSrc} alt={data.photoInfo.photo.title._content} />
</section>

<style>
	.container {
		padding: 2rem;
	}
	.summary {
		margin: 1rem 0;
		padding: 1rem;
		width: fit-content;

		border: 1px solid #18181b;
		border-radius: 0.5rem;
		cursor: default;
	}
	.exif-detail-list {
		margin: 0.5rem 0 0 0;
		padding-left: 2rem;
	}
	img {
		max-width: 100%;
		height: auto;
	}
</style>
