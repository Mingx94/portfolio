<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let title = 'Capture Life | Coding Shutter';
	let description = 'Capturing the beautiful moments of life through the lens';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://coding-shutter.live/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/home.jpg" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="coding-shutter.live" />
	<meta property="twitter:url" content="https://coding-shutter.live/" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/home.jpg" />
</svelte:head>

<div class="container">
	<h1>Capture Life</h1>
	<p>Capturing the beautiful moments of life through the lens</p>
</div>

<section>
	<ul class="albums">
		{#each data.photosets.photoset as album}
			<li class="album">
				<a class="album-link" href={`/albums/${album.id}`}>
					<img
						class="album-cover"
						src={album.primary_photo_extras.url_m}
						alt={album.title._content}
						loading="lazy"
					/>
					<span class="img-title">{album.title._content}</span>
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
		flex-direction: column;
		width: 100%;
		padding: 2rem;
		text-align: center;
	}
	.container h1 {
		margin: 0;
	}
	.container p {
		margin: 10px 0 0 0;
	}
	section {
		padding: 2rem;
	}
	.albums {
		padding: 0;
		margin: 0 auto;
		max-width: 900px;

		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		list-style: none;
	}

	.album {
		flex: 1 1 calc((100% - 2rem) / 2);
	}

	@media (max-width: 767px) {
		.album {
			flex: 1 1 100%;
		}
	}

	.album-link {
		display: flex;
		position: relative;
	}
	.album-cover {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.img-title {
		background-color: #000;
		width: 100%;
		text-align: center;
		padding: 16px 20px;
		color: #fff;
		position: absolute;
		bottom: 0;
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: 1;

		/* ellipsis */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.album-link:hover .img-title {
		opacity: 1;
	}
</style>
