<script lang="ts">
	import type { PageData } from './$types';
	import home from '$lib/assets/home.jpg';

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
	<meta property="og:url" content="https://coding-shutter.blog/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={home} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="coding-shutter.blog" />
	<meta property="twitter:url" content="https://coding-shutter.blog/" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={home} />
</svelte:head>

<div class="container">
	<h1>Capture Life</h1>
	<p>Capturing the beautiful moments of life through the lens</p>
</div>

<section>
	<ul class="albums">
		{#each data.photosets.photoset as album}
			<li class="album">
				<figure class="figure">
					<a class="album-link" href={`/albums/${album.id}`}>
						<img
							class="album-cover"
							src={album.primary_photo_extras.url_m}
							alt={album.title._content}
							loading="lazy"
						/>
					</a>
					<figcaption class="img-title">{album.title._content}</figcaption>
				</figure>
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
		gap: 15px;
		list-style: none;
	}

	.album {
		flex: 0 1 calc((100% - 2rem) / 2);
	}

	@media (max-width: 767px) {
		.album {
			flex: 1 1 100%;
		}
	}

	.album-link {
		display: flex;
	}
	.figure {
		position: relative;
		margin: 0;
		overflow: hidden;
		--img-scale: 1;
	}
	.figure:hover {
		--img-scale: 1.1;
	}
	.album-cover {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transform: scale(var(--img-scale));
		transition: transform 0.4s ease-in-out;
	}
	.img-title {
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0) 100%
		);
		width: 100%;
		text-align: center;
		padding: 25px 20px 20px 20px;
		color: #fff;
		position: absolute;
		font-weight: 600;
		font-size: 1.1rem;
		bottom: 0;
		z-index: 1;
		pointer-events: none;

		/* ellipsis */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

</style>
