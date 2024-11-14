<script lang="ts">
	import { ogUrl, siteName, siteUrl, twitterHandle } from '$lib/site/config.js';
	import { formatDate } from '$lib/utils';

	let { data } = $props();

	const { title, description, published, updated, categories } = data.meta;
	const ogImage = ogUrl + '?text=' + encodeURIComponent(data.meta.title);
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
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />
	<meta property="og:type" content="article" />

	<!-- Twitter Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} />
</svelte:head>

<section class="site-width py-4 sm:py-8">
	<article class="prose">
		<!-- Title -->
		<hgroup class="mb-4">
			<h1 class="mb-2 text-3xl font-semibold">{data.meta.title}</h1>
			<p class="!mb-0 mt-2 !text-base">
				<b>Published:</b>
				{formatDate(published)}
				<br />
				<b>Updated:</b>
				{formatDate(updated)}
			</p>
		</hgroup>

		<!-- Tags -->
		{#if categories}
			<aside class="mb-4">
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
</section>
