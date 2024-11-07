<script lang="ts">
	import Posts from '$lib/components/posts.svelte';
	import {
		categories,
		siteDescription,
		siteImage,
		siteName,
		siteTitle,
		siteUrl,
		socialLinks,
		twitterHandle
	} from '$lib/site/config';
	import { createSeparator, melt } from '@melt-ui/svelte';

	const {
		elements: { root }
	} = createSeparator({
		orientation: 'vertical'
	});

	let { data } = $props();
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />

	<!-- OG Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:image" content={siteImage} />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="400" />

	<!-- Twitter Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={siteImage} />
</svelte:head>

<section class="container flex flex-col px-4 pt-20 sm:px-8">
	<div class="mb-20 flex flex-col items-center gap-6 sm:flex-row">
		<div class="shrink-0 sm:w-3/5">
			<h1 class="mb-6 text-2xl">
				你好，👋 我是 Michael Tsai，是一名前端工程師。
				<br class="max-sm:hidden" />
				這邊主要分享我在前端領域的學習心得，擅長使用React、Next.js 開發，Svelte 則是我主要使用在個人專案上的技術之一。
				除了前端技術外，我也對攝影有著濃厚的興趣，此部落格也會分享一些攝影作品。
			</h1>
			<ul class="flex justify-start gap-4">
				{#each socialLinks as socialLink}
					<li>
						<a
							href={socialLink.url}
							target="_blank"
							rel="noopener noreferrer nofollow"
							class="flex items-center gap-[8px]"
							title={socialLink.name}
							aria-label={socialLink.name}
						>
							<div
								class="size-[28px] {socialLink.icon}"
								role="img"
								aria-label={socialLink.name}
							></div>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<figure class="rounded-md bg-card p-2 shadow-lg sm:w-2/5 sm:rotate-2">
			<img src="/home.jpg" alt="澎湖" class=" rounded-sm" />
			<figcaption class="mt-1 text-right text-sm text-main/80">澎湖 - 南寮浮球秘境</figcaption>
		</figure>
	</div>

	<div use:melt={$root} class="mb-10 h-[1px] w-full bg-stone-500"></div>

	<div class="flex max-sm:flex-col">
		<div class="sm:w-3/5">
			<h2 class="mb-4 text-xl font-semibold">文章列表</h2>
			<Posts posts={data.posts} />
		</div>
		<div class="sm:w-2/5">
			<h2>類別</h2>
			<ul class="flex flex-wrap gap-2">
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}" class="bg-accent p-1 text-sm">
							&num;{category}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.separator {
		width: 1px;
		height: 1.2em;
		background-color: currentColor;
	}
</style>
