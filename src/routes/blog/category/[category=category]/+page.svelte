<script lang="ts">
	import { page } from '$app/stores';
	import Posts from '$lib/components/posts.svelte';

	let { data } = $props();

	const category = $page.params.category;
</script>

<svelte:head>
	<title>類別 - {category}</title>
	<meta content="{category} 類別" name="description" />
</svelte:head>

<section class="container flex flex-col px-4 pt-20 sm:px-8">
	<h1 class="mb-6 text-2xl">&num;{category}</h1>

	<Posts posts={data.posts}></Posts>
</section>
