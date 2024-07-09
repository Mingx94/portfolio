<script lang="ts">
	import { formatDate } from '$lib/utils/formate-date';

	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;

	const { content } = data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content={coverImage} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:image" content={coverImage} />
</svelte:head>

<article class="mx-auto max-w-[50rem] px-6 py-[20px] sm:px-[30px] sm:py-[40px]">
	<img
		class="h-auto w-full max-w-full"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{title}</h1>

	<div class="mt-[16px] text-sm text-gray-500">
		<b>Published:</b>
		{formatDate(date)}
		<br />
		<b>Updated:</b>
		{formatDate(updated)}
	</div>
	
	{#if categories}
		<aside class="mt-6">
			<ul class="mt-2 flex flex-wrap gap-2 p-0">
				{#each categories as category}
					<li class="inline-block text-sm">
						<a class="bg-skin-card p-1" href="/blog/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	<!-- Post -->
	<div class="prose prose-slate mt-[40px] max-w-none">
		<svelte:component this={content} />
	</div>
</article>

<style>
	h1 {
		font-size: clamp(1.5rem, 4vw, 2rem);
	}
</style>
