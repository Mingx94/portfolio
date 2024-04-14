<script lang="ts">
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

<section class="mx-auto max-w-[50rem] px-[10px] py-[20px] sm:px-[30px] sm:py-[40px]">
	<ul class="flex flex-wrap">
		{#each data.photosets.photoset as album, index}
			<li
				style:--delay="{(index + 1) * 80}ms"
				class="mx-[10px] mb-[20px] w-[calc(100%-20px)] animate-[pop-in] animate-delay-[--delay] animate-duration-[0.5s] animate-fill-both animate-ease-in-out sm:w-[calc(50%-20px)]"
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
					/>
					<figcaption class="absolute bottom-2 left-2 flex gap-[4px] font-semibold text-white">
						<div
							class="i-iconoir-media-image-list size-[24px] flex-shrink-0"
							role="img"
							title="Album Icon"
						/>
						<span class="line-height-[24px] line-clamp-2 text-[18px]">{album.title._content}</span>
					</figcaption>
				</figure>
			</li>
		{/each}
	</ul>
</section>
