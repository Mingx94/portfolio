<script lang="ts">
	import { formatDate } from '$lib/utils/formate-date';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-auto max-w-[50rem] px-[1.5rem] py-[20px] sm:px-[30px] sm:py-[40px]">
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class="mt-[16px] text-sm text-gray-500">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	{#if data.meta.categories && data.meta.categories.length > 0}
		<!-- Tags -->
		<div class="mt-[20px] flex gap-[10px]">
			{#each data.meta.categories as category}
				<span class="rounded-full bg-gray-800 px-[10px] py-[4px] text-gray-800"
					>&num;{category}</span
				>
			{/each}
		</div>
	{/if}

	<!-- Post -->
	<div class="prose prose-slate mt-[40px]">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		margin-inline: auto;
	}

	h1 {
		font-size: clamp(1.5rem, 4vw, 2rem);
	}
</style>
