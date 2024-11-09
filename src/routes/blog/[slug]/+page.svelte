<script lang="ts">
	import { siteName, siteUrl, twitterHandle } from '$lib/site/config.js';
	import { formatDate } from '$lib/utils';

	let { data } = $props();

	const { title, description, published, updated, categories } = data.meta;
</script>

<!-- SEO -->
<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- OG Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:description" content={description} />

	<!-- Twitter Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<article class="prose container py-4 sm:py-8">
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class="!mb-0 mt-2">
			<b>Published:</b>
			{formatDate(published)}
			<br />
			<b>Updated:</b>
			{formatDate(updated)}
		</p>
	</hgroup>

	<!-- Tags -->
	{#if categories}
		<aside>
			<ul>
				{#each categories as category}
					<li class="inline-block text-sm">
						<a class="bg-accent p-1 !no-underline" href="/blog/category/{category}/">
							&num;{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	<!-- Post -->
	<data.content />
</article>
