<script lang="ts">
	import { siteName, siteUrl, twitterHandle } from '$lib/site/config';

	let { data } = $props();
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>相簿列表</title>
	<meta name="description" content="相簿列表" />

	<!-- OG Tags -->
	<meta property="og:title" content="相簿列表" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:description" content="相簿列表" />

	<!-- Twitter Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:title" content="相簿列表" />
	<meta name="twitter:description" content="相簿列表" />
</svelte:head>

<section class="site-width px-2 py-6 md:px-4">
	<ul
		class="grid w-full grid-cols-[repeat(auto-fill,minmax(280px,30%))] place-content-center gap-6 max-md:!grid-cols-2 md:gap-12"
	>
		{#each data.photosets.photoset as album, index}
			<li style:--stagger={index} class="col-span-1">
				<a class="flex w-full" href={`/albums/${album.id}`}>
					<figure class="w-full text-center">
						<img
							class="aspect-square w-full object-cover"
							src={album.primary_photo_extras.url_m}
							alt={album.title._content}
							loading="lazy"
						/>

						<figcaption class="my-4 text-lg sm:text-2xl">
							{album.title._content}
						</figcaption>
					</figure>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul > * {
		--delay: 180ms;
		animation: pop-in var(--duration) ease;
		animation-fill-mode: both;
		animation-delay: calc(var(--delay) * var(--stagger));
	}
</style>
