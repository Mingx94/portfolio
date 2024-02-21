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

<article class="max-w-50rem mx-auto px-10px sm:px-30px py-20px sm:py-40px">
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class="mt-16px text-gray-4 text-sm">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	{#if data.meta.categories && data.meta.categories.length > 0 }
		<!-- Tags -->
		<div class="flex gap-10px mt-20px">
			{#each data.meta.categories as category}
				<span class="px-10px py-4px rounded-full bg-gray-3 text-gray-8">&num;{category}</span>
			{/each}
		</div>
	{/if}

	<!-- Post -->
	<div class="mt-40px prose prose-slate prose-a:gray">
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
