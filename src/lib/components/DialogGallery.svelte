<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { GalleryItem } from '$lib/types/GalleryItem';
	import { dragScroll } from '$lib/utils/dragScroll';
	import { removeScroll } from '$lib/utils/removeScroll';
	import type { Action } from 'svelte/action';
	import { fade } from 'svelte/transition';
	import Image from './Image.svelte';
	import ExifViewer from '$lib/components/ExifViewer.svelte';

	export let images: GalleryItem[] = [];

	$: openBox = $page.url.searchParams.get('index') ?? null;

	const initialScrollLeft: Action<HTMLDivElement, { index: number }> = (node, { index }) => {
		node.scrollLeft = index * node.offsetWidth;
	};
</script>

<svelte:head>
	{#each images as image}
		<link rel="preload" as="image" href={image.src} />
	{/each}
</svelte:head>

{#if openBox !== null}
	<div
		in:fade={{ duration: 300 }}
		class="fixed top-0 bottom-0 left-0 right-0 bg-gray-100 overflow-hidden z-50"
	>
		<button
			class="absolute top-0 left-0 p-10px cursor-pointer hover:bg-gray-200 z-[1]"
			on:click={() => {
				goto($page.url.pathname, { replaceState: true });
			}}
			tabindex="0"
		>
			返回
		</button>
		<div
			class="snap-x snap-mandatory md:overflow-x-scroll items-center h-full whitespace-nowrap cursor-grab flex items-center overflow-x-auto"
			use:dragScroll
			use:removeScroll
			use:initialScrollLeft={{ index: Number(openBox) }}
		>
			{#each images as image}
				<div
					class="w-full h-full md:p-20px snap-start snap-always md:scroll-px-20px flex-shrink-0 flex-grow-0"
				>
					<div class="w-full h-full relative">
						<ExifViewer photoId={image.photoId} />
						<Image
							src={image.src}
							alt=""
							class="absolute object-contain left-0 top-0 object-center w-full h-full"
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
