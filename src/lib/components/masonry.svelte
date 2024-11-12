<script lang="ts">
	import type { ClientPhoto } from '$lib/types/photo';
	import { cn } from '$lib/utils';

	let {
		gap = 10,
		loading = 'eager',
		maxWidth = 400,
		minWidth = 250,
		images = [],
		onclick
	}: {
		images: ClientPhoto[];
		maxWidth?: number;
		minWidth?: number;
		gap?: number;
		loading?: 'eager' | 'lazy';
		onclick?: (index: number) => void;
	} = $props();

	type Position = {
		item: ClientPhoto;
		index: number;
		left: number;
		top: number;
		ratio: number;
	};
	let items: Position[] = $state([]);
	let maxHeight = $state(0);
	let galleryWidth = $state(0);
	let numColumns = $state(0);

	$effect(() => {
		// items and gap will fill all space
		function getLayoutConfig(
			containerWidth: number,
			itemWidth: [min: number, max: number],
			gap: number
		): number {
			let numColumns = Math.ceil((containerWidth + gap) / (itemWidth[1] + gap));
			if (numColumns < 1) {
				numColumns = 1;
			}

			return numColumns;
		}

		function masonryLayout(
			items: ClientPhoto[],
			containerWidth: number,
			numColumns: number,
			gap: number
		): [Position[], number] {
			const positions: Position[] = [];
			const columnHeights: number[] = new Array(numColumns).fill(0);
			const itemWidth = (containerWidth - gap * (numColumns - 1)) / numColumns;

			for (let i = 0; i < items.length; i++) {
				const item = items[i];
				// Find the column with the smallest height
				const minHeight = Math.min(...columnHeights);
				const minColumn = columnHeights.indexOf(minHeight);

				let ratio = item.thumbnail.width / item.thumbnail.height;
				if (ratio > 1) {
					ratio = 4 / 3;
				} else if (ratio < 1) {
					ratio = 3 / 4;
				}

				const convertedHeight = itemWidth / ratio;

				// Calculate the position
				const left = minColumn * (itemWidth + gap);
				const top = minHeight + (minHeight > 0 ? gap : 0);

				// Update column height including gap
				columnHeights[minColumn] = top + convertedHeight;

				// Store the position
				positions.push({ item, left, top, index: i, ratio });
			}

			return [positions, (Math.max(...columnHeights) | 0) + 1] as const;
		}

		numColumns = getLayoutConfig(galleryWidth, [minWidth, maxWidth], gap);
		[items, maxHeight] = masonryLayout(images, galleryWidth, numColumns, gap);
	});
</script>

<ul
	id="gallery"
	bind:clientWidth={galleryWidth}
	style="--height:{maxHeight};
			--width: calc(1px * (({galleryWidth} - {gap} * {numColumns - 1}) / {numColumns}));"
>
	{#each items as { item, left, top, index, ratio } (item.photoId)}
		<li
			class="absolute left-0 top-0 aspect-[--ratio] w-[--width]"
			style="transform: translate3D({left}px, {top}px, 0); --ratio: {ratio}"
		>
			<button onclick={() => onclick?.(index)} class={cn('contents', !onclick && 'cursor-default')}>
				<img
					src={item.thumbnail.src}
					alt={item.alt}
					{loading}
					class="absolute inset-0 size-full object-cover"
				/>
			</button>
		</li>
	{/each}
</ul>

<style>
	#gallery {
		width: 100%;
		height: calc(var(--height) * 1px);
		position: relative;
	}
</style>
