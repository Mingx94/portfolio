<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { GalleryItem } from '$lib/types/gallery-item';
	import { dragScroll } from '$lib/utils/drag-scroll';
	import { removeScroll } from '$lib/utils/remove-scroll';
	import type { Action } from 'svelte/action';
	import { fade } from 'svelte/transition';
	import Image from './image.svelte';

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
		class="fixed bottom-0 left-0 right-0 top-0 isolate z-[50] overflow-hidden bg-gray-100"
	>
		<button
			class="p-10px absolute left-0 top-0 z-[1] cursor-pointer hover:bg-gray-200"
			on:click={() => {
				goto($page.url.pathname, { replaceState: true });
			}}
			tabindex="0"
		>
			返回
		</button>
		<div
			class="md:overflow-x-scroll flex h-full cursor-grab snap-x snap-mandatory items-center overflow-x-auto whitespace-nowrap"
			use:dragScroll
			use:removeScroll
			use:initialScrollLeft={{ index: Number(openBox) }}
		>
			{#each images as image}
				<div
					class="md:p-20px md:scroll-px-20px h-full w-full flex-shrink-0 flex-grow-0 snap-start snap-always"
				>
					<div class="relative h-full w-full">
						<Image
							src={image.src}
							alt=""
							class="absolute left-0 top-0 h-full w-full object-contain object-center"
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
