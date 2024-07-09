<!-- Renders posts listed by category -->
<script lang="ts">
	import Pagination from '$lib/components/pagination.svelte';
	import Posts from '$lib/components/posts.svelte';
	import { siteDescription } from '$lib/config';

	export let data;
	const { page, category, totalPosts, posts } = data;
</script>

<svelte:head>
	<title>Blog category {category} - page {page}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

<section class="mx-auto max-w-[50rem] px-[1.5rem] py-[20px] sm:px-[30px] sm:py-[40px]">
	{#if posts && posts.length}
		<h1 class="mb-[20px] text-[36px] font-semibold">
			Category: {category}
		</h1>

		<Posts {posts} />

		<Pagination currentPage={page} totalPage={totalPosts} path="/blog/category/{category}/page" />
	{:else}
		<h1>Oops!</h1>

		<p>Sorry, no posts to show here.</p>

		<a href="/blog">Back to blog</a>
	{/if}
</section>
