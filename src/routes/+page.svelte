<script lang="ts">
	import type { PageData } from './$types';
	import albumSvg from '$lib/assets/album.svg';

	export let data: PageData;

	let title = 'Michael Tsai 📷 Coding Shutter';
	let description = 'A Front-end Engineer / Photography enthusiast';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Front-end, Engineer, photography, photo, sony, a7c, tamron, portfolio"
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://coding-shutter.blog/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://coding-shutter.blog/home.jpg" />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="400" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://coding-shutter.blog/home.jpg" />
</svelte:head>

<section class="max-w-1400px mx-auto py-40px px-20px xl:px-40px">
	<h1 class="text-24px font-600 mb-5px">Michael Tsai</h1>
	<p class="text-14px">Front-end Engineer | Photography enthusiast</p>
</section>

<section class="max-w-1400px mx-auto px-10px xl:px-30px">
	<ul class="flex flex-wrap">
		{#each data.photosets.photoset as album}
			<li
				class="w-[calc(100%-20px)] sm:w-[calc(50%-20px)] mx-10px lg:w-[calc(100%/3-20px)] mb-20px"
			>
				<figure class="w-full aspect-ratio-[4/3] relative shadow-md bg-gray-100">
					<a class="h-full w-full" href={`/albums/${album.id}`}>
						<img
							class="absolute top-0 left-0 w-full h-full object-cover rounded-md"
							src={album.primary_photo_extras.url_m}
							alt={album.title._content}
							loading="lazy"
						/>
					</a>
					<!-- gradient mask -->
					<div
						class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-md pointer-events-none"
					/>
					<figcaption class="absolute bottom-2 left-2 text-white font-600 flex gap-4px">
						<img src={albumSvg} alt="album" class="w-24px h-24px flex-shrink-0" />
						<span class="text-18px line-clamp-2 line-height-24px">{album.title._content}</span>
					</figcaption>
				</figure>
			</li>
		{/each}
	</ul>
</section>
