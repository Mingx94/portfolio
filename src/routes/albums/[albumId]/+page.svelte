<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;

	$: primaryPhoto = data.album.photoset.photo[0];
</script>

<svelte:head>
	<title>{data.albumInfo.photoset.title._content} - Album</title>
	<meta name="description" content={data.albumInfo.photoset.description._content} />
</svelte:head>

<div class="container">
	<img class="title-img" src={primaryPhoto.url_m} alt={data.album.photoset.title} />
	<h1 class="title">
		{data.albumInfo.photoset.title._content}
	</h1>
	<p class="description">
		{data.albumInfo.photoset.description._content}
	</p>
</div>
<section>
	<ul in:fade={{ delay: 300, duration: 300 }}>
		{#each data.album.photoset.photo as photo}
			<li class="photo-link">
				<a href={`/photos/${photo.id}`}>
					<img src={photo.url_m} alt={photo.title} loading="lazy" />
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.container {
		padding: 2rem;
		display: grid;
		grid-template-areas:
			'image title'
			'image description';

		grid-template-columns: minmax(400px, 1fr) 1fr;
		grid-template-rows: 60px 1fr;

		gap: 30px;
	}

	.title {
		grid-area: title;
		margin: 0;
	}

	.description {
		grid-area: description;
		margin: 0;
	}

	.title-img {
		grid-area: image;
		align-self: start;
		justify-self: self-end;
		width: 400px;
		height: auto;
		object-fit: contain;
	}

	@media (max-width: 767px) {
		.container {
			display: grid;
			grid-template-areas:
				'title'
				'description';
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}

		.title-img {
			display: none;
		}
	}
	ul {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		padding: 2rem;
		margin: 0;
		list-style: none;
	}

	.photo-link {
		display: flex;
		justify-content: center;
		align-self: center;
		min-width: 0;
	}
	.photo-link img {
		max-width: 100%;
		height: auto;
	}
</style>
