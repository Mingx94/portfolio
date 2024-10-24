<script lang="ts">
	import Pagination from '$lib/components/pagination.svelte';
	import Posts from '$lib/components/posts.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

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

	<Posts posts={data.posts} />

	<!-- Pagination -->
	<Pagination currentPage={1} totalPage={data.total} />
</section>
