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

<section class="container px-4 py-6 sm:px-8">
	<ul class="flex flex-wrap">
		{#each data.photosets.photoset as album, index}
			<li
				style:--stagger={index}
				class="mx-[10px] mb-[20px] w-[calc(100%-20px)] sm:w-[calc(50%-20px)]"
			>
				<figure
					class="relative isolate aspect-[4/3] w-full overflow-hidden rounded-md bg-gray-100 shadow-md"
				>
					<a class="h-full w-full" href={`/albums/${album.id}`}>
						<img
							class="absolute left-0 top-0 h-full w-full rounded-md object-cover"
							src={album.primary_photo_extras.url_m}
							alt={album.title._content}
							loading="lazy"
						/>
					</a>
					<!-- gradient mask -->
					<div
						class="pointer-events-none absolute left-0 top-0 h-full w-full rounded-md bg-gradient-to-b from-transparent to-black opacity-50"
					></div>
					<figcaption class="absolute bottom-2 left-2 flex gap-[4px] font-semibold text-white">
						<div
							class="i-iconoir-media-image-list size-[24px] flex-shrink-0"
							role="img"
							title="Album Icon"
						></div>
						<span class="line-height-[24px] line-clamp-2 text-[18px]">{album.title._content}</span>
					</figcaption>
				</figure>
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
