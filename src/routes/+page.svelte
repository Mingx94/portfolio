<script lang="ts">
	import Posts from '$lib/components/posts.svelte';
	import {
		albumLink,
		categories,
		links,
		siteDescription,
		siteImage,
		siteName,
		siteTitle,
		siteUrl,
		twitterHandle
	} from '$lib/site/config';
	import Icon from '@iconify/svelte';
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
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />

	<!-- Twitter Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={siteImage} />
</svelte:head>

<section class="site-width flex flex-col px-4 pt-20 sm:px-8">
	<div class="mb-20 flex flex-col items-center gap-6 sm:flex-row">
		<div class="shrink-0 sm:w-3/5">
			<h1 class="mb-6 text-2xl text-balance">
				你好，👋 我是 Michael Tsai，是一名前端工程師。
				這邊主要分享我在前端領域的學習心得，擅長使用React、Next.js 開發，Svelte
				則是我主要使用在個人專案上的技術之一。
				除了前端技術外，我也對攝影有著濃厚的興趣，此部落格也會分享一些
				<a href="/albums" class="underline underline-offset-4">攝影作品</a>。
			</h1>
			<ul class="flex justify-start gap-4">
				{#each links as socialLink}
					<li>
						<a
							href={socialLink.url}
							target="_blank"
							rel="noopener noreferrer nofollow"
							class="flex"
							title={socialLink.name}
							aria-label={socialLink.name}
						>
							<Icon icon={socialLink.icon} class="size-[28px]" aria-hidden="true" />
						</a>
					</li>
				{/each}
				<li>
					<a
						href={albumLink.url}
						class="flex"
						title={albumLink.name}
						aria-label="{albumLink.name}}"
					>
						<Icon icon={albumLink.icon} class="size-[28px]" aria-hidden="true" />
					</a>
				</li>
			</ul>
		</div>

		<figure class="bg-bg-card rounded-md p-2 shadow-lg sm:w-2/5 sm:rotate-2">
			<img src="/home.webp" alt="澎湖" class=" rounded-xs" width="600" height="400" />
			<figcaption class="text-main/80 mt-1 text-right text-sm">澎湖 - 南寮浮球秘境</figcaption>
		</figure>
	</div>

	<div use:melt={$root} class="mb-10 h-[1px] w-full bg-stone-500"></div>

	<div class="flex gap-8 max-sm:flex-col">
		<div class="sm:flex-grow-3 sm:basis-0">
			<h2 class="mb-4 text-xl font-semibold">文章列表</h2>
			<Posts posts={data.posts} />
		</div>
		<div class="sm:flex-grow-2 sm:basis-0">
			<h2 class="mb-4 text-xl font-semibold">類別</h2>
			<ul class="flex flex-wrap gap-2">
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}" class="bg-bg-accent p-1 text-base">
							&num;{category}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
