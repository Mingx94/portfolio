<script lang="ts">
	import type { PhotoExif } from '$lib/types/PhotoExif';

	export let photoId: string;
	const EXIF_TAGS = [''];

	let photo: Promise<PhotoExif> | null = null;
	let lensModel: string | null = null;

	function loadExif() {
		if (photo) return;
		photo = fetch('/api/exif?photoId=' + photoId)
			.then((res) => res.json() as Promise<{ photo: PhotoExif }>)
			.then((res) => res.photo)
			.then((res) => {
				lensModel =
					(res.exif.find((tag) => tag.tag === 'LensModel')?.raw._content as string) ?? null;
				return {
					...res,
					exif: res.exif.filter((tag) => EXIF_TAGS.includes(tag.tag))
				};
			});
	}
</script>

<button class="absolute z-50 right-0 top-0 p-10px hidden" on:click={loadExif}>Exif</button>

{#if photo}
	<div class="absolute z-50 top-40px p-10px right-0">
		{#await photo}
			<p>...loading</p>
		{:then photo}
			<div>
				{photo.camera}
				<br />
				{lensModel}
			</div>
			{#each photo.exif as tag}
				<li>{tag.raw._content}</li>
			{/each}
		{/await}
	</div>
{/if}
