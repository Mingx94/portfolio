<script lang="ts">
	import TransitionImage from '$lib/components/TransitionImage.svelte';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;

	$: primaryPhoto = data.album.photoset.photo[0];
</script>

<svelte:head>
	<title>Album</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
	<h1 in:fade={{ delay: 600, duration: 300 }} out:fade={{ delay: 0, duration: 300 }}>
		{data.album.photoset.title}
	</h1>
	<a href="/">
		<TransitionImage
			class="album"
			src={primaryPhoto?.url_m}
			alt={data.album.photoset.title}
			transitionId={data.album.photoset.id}
		/>
	</a>
</div>
<section>
	<ul in:fade={{ delay: 600, duration: 300 }} out:fade={{ delay: 0, duration: 300 }}>
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
		text-align: center;
	}
	.container a {
		display: block;
		width: fit-content;
		margin: 0 auto;
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
