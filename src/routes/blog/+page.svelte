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
<section class="mx-auto max-w-[50rem] px-[1.5rem] py-[20px] sm:px-[30px] sm:py-[40px]">
	<h1 class="mb-[20px] text-[36px] font-bold">文章列表</h1>
	<ul class="grid gap-[2rem]">
		{#each data.posts as post, index}
			<li
				style:--delay="{(index + 1) * 160}ms"
				class="post animate-duration-800 animate-[fade-in-up] animate-delay-[--delay] animate-fill-both animate-ease-in-out"
			>
				<a href={`/blog/${post.slug}`} class="title underline decoration-solid">{post.title}</a>
				<p class="text-sm text-gray-500">{formatDate(post.date)}</p>
				<p class="mt-[16px]">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.post {
		max-inline-size: 70ch;

		&:not(:last-child) {
			@apply border-b border-b-gray-500 pb-[2rem];
		}
	}
	.title {
		font-size: clamp(1.5rem, 4vw, 2rem);
	}
</style>
