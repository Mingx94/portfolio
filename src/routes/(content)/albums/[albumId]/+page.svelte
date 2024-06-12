<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import type { PageData } from './$types';
	import { Drawer } from 'vaul-svelte';

	export let data: PageData;

	$: primaryPhoto = data.album.photoset.photo.find(
		(photo) => photo.id === data.albumInfo.photoset.primary
	)!;

	$: title = `${data.albumInfo.photoset.title._content} - Michael Tsai 📷`;
	$: description = data.albumInfo.photoset.description._content;

	let activePhoto: {
		src: string;
		width: number;
		height: number;
		photoId: string;
		alt?: string;
	} | null = null;

	let isOpen = false;
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta
		property="og:url"
		content="https://coding-shutter.blog/albums/{data.albumInfo.photoset.id}"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={primaryPhoto.url_m} />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="400" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={primaryPhoto.url_m} />

	{#each data.images as image, i}
		<link rel="prefetch" href={image.src} />
	{/each}
</svelte:head>

<div class="mx-auto max-w-[50rem] px-[16px] pb-[48px] pt-[24px] sm:px-[24px]">
	<h1 class="mb-[10px] text-[24px] font-semibold">
		{data.albumInfo.photoset.title._content}
	</h1>
	{#if data.albumInfo.photoset.description._content}
		<p class="text-16px">
			{data.albumInfo.photoset.description._content}
		</p>
	{/if}
</div>

<Drawer.Root
	open={isOpen}
	onOpenChange={(event) => (isOpen = event)}
	direction="right"
	preventScroll={false}
>
	<section class="mx-auto max-w-[80rem] px-[16px] pb-[48px] sm:px-[24px]">
		<div class="gallery">
			{#each data.images as img, i}
				{@const thumb = img.thumbnail ?? img}
				<Drawer.Trigger
					class="group flex aspect-square items-center justify-center overflow-hidden"
					type="button"
					on:click={() =>
						(activePhoto = {
							src: img.src,
							width: img.width,
							height: img.height,
							photoId: img.photoId,
							alt: img.alt ?? ''
						})}
					tabindex="0"
				>
					<Image
						src={thumb.src}
						alt={img.alt ?? ''}
						width={thumb.width}
						height={thumb.height}
						loading="lazy"
						class="m-[4px] max-h-[calc(100%-16px)] max-w-[calc(100%-16px)] object-contain transition-transform duration-[0.15s] group-hover:scale-[1.08]"
					/>
				</Drawer.Trigger>
			{/each}
		</div>
	</section>

	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 z-20 bg-black/40" />
		<Drawer.Content
			data-testid="content"
			class="fixed bottom-0 right-0 top-0 z-30 flex w-full flex-row rounded-l-[10px] bg-skin-fill p-6 md:w-[80%] md:max-w-[1000px]"
		>
			<div class="flex size-full flex-row gap-[50px] rounded-full">
				<div class="my-auto h-12 w-1.5 rounded-full bg-zinc-300" />
				<div class="relative grid size-full place-content-center">
					{#if activePhoto !== null}
						<Image
							src={activePhoto.src}
							alt={activePhoto.alt ?? ''}
							width={activePhoto.width}
							height={activePhoto.height}
							class="absolute left-0 top-0 size-full object-contain"
							data-vaul-no-drag
						/>
					{/if}
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: 2px;
	}

	@media (min-width: 768px) {
		.gallery {
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		}
	}
</style>
