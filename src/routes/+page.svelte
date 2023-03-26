<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#each data.photosets.photoset as album}
		<a class="album-link" href={`/albums/${album.id}`}>
			<img src={album.primary_photo_extras.url_m} alt={album.title._content} loading="lazy" />
			<span>{album.title._content}</span>
		</a>
	{/each}
</section>

<style>
	.album-link {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
