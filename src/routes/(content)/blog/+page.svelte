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
	<h1 class="mb-[20px] text-[36px] font-semibold">文章列表</h1>
	<ul class="-mx-4 w-full space-y-[24px]" style:--step="0.1s" style:--duration="0.4s">
		{#each data.posts as post, index}
			<li style:--stagger={index} class="post w-full">
				<a
					href={`/blog/${post.slug}`}
					class="block w-full bg-transparent p-4 transition-colors duration-200 hover:bg-gray-200/50"
				>
					<h2 class="title underline decoration-solid">{post.title}</h2>
					<p class="text-sm text-gray-500">{formatDate(post.date)}</p>
					<p class="mt-[16px]">{post.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.post {
		&:not(:last-child) {
			@apply border-b border-b-gray-500 pb-[2rem];
		}
	}
	.title {
		font-size: clamp(1.5rem, 4vw, 2rem);
	}

	ul > * {
		animation: fade-in-up var(--duration) ease;
		animation-fill-mode: both;
		animation-delay: calc(var(--delay) * var(--stagger));
	}
</style>
