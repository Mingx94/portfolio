<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Album</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#each data.album.photoset.photo as photo}
		<a class="photo-link" href={`/photos/${photo.id}`}>
			<img src={photo.url_m} alt={photo.title} loading="lazy" />
		</a>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
		align-items: center;
	}

	.photo-link {
		display: flex;
		justify-content: center;
		flex-shrink: 0;
	}
</style>
