<script lang="ts">
	import { formatDate } from '$lib/utils/formate-date';
	import type { PageData } from './$types';

	export let data: PageData;

	const title = '文章列表 - Michael Tsai 📷';
	const description = '文章列表 ';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://coding-shutter.blog/blog" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
</svelte:head>

<!-- Posts -->
<section class="max-w-50rem mx-auto px-1.5rem sm:px-30px py-20px sm:py-40px">
	<h1 class="text-36px font-700 mb-20px">文章列表</h1>
	<ul class="grid gap-2rem">
		{#each data.posts as post, index}
			<li
				style:--delay="{(index + 1) * 160}ms"
				class="post not-last:(border-b border-b-gray-4 pb-2rem) animate-[fade-in-up] animate-both animate-delay-[--delay] animate-duration-800 animate-ease-in-out"
			>
				<a href={`/blog/${post.slug}`} class="title decoration-underline">{post.title}</a>
				<p class="text-gray-4 text-sm">{formatDate(post.date)}</p>
				<p class="mt-16px">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.post {
		max-inline-size: 70ch;
	}
	.title {
		font-size: clamp(1.5rem, 4vw, 2rem);
	}
</style>
