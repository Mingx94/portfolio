<script lang="ts">
	import TransitionImage from '$lib/components/TransitionImage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
	<h1>Michael Photo</h1>
</div>

<section>
	<ul>
		{#each data.photosets.photoset as album}
			<li>
				<a class="album-link" href={`/albums/${album.id}`}>
					<TransitionImage
						class="album"
						src={album.primary_photo_extras.url_m}
						alt={album.title._content}
						loading="lazy"
						transitionId={album.id}
						title={album.title._content}
					/>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.container {
		height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	section {
		padding: 2rem;
	}
	h1 {
		text-align: center;
	}
	ul {
		padding: 0;
		margin: 0 auto;		
		max-width: 1200px;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 2rem;
		list-style: none;
	}
	li {
		min-width: 0;
	}
	.album-link {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
