<script lang="ts">
	import albumSvg from '$lib/assets/album.svg';
	import type { PageData } from './$types';

	export let data: PageData;

	let title = '相簿列表 - Michael Tsai 📷';
	let description = '相簿列表';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://coding-shutter.blog/albums" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
</svelte:head>

<section class="max-w-1100px mx-auto px-10px xl:px-30px py-20px xl:py-40px">
	<ul class="flex flex-wrap">
		{#each data.photosets.photoset as album, index}
			<li
				style:--delay="{(index +1) * 40}ms"
				class="w-[calc(100%-20px)] sm:w-[calc(50%-20px)] mx-10px lg:w-[calc(100%/3-20px)] mb-20px animate-delay-[--delay] animate-fade-in-up animate-both animate-duration-200"
			>
				<figure
					class="w-full aspect-ratio-[4/3] relative shadow-md bg-gray-100 rounded-md isolate overflow-hidden"
				>
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
