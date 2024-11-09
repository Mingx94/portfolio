<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDateShort } from '$lib/utils';

	interface Props {
		posts?: Post[];
	}

	let { posts = [] }: Props = $props();
</script>

<ul class="w-full space-y-2">
	{#each posts as post}
		<li>
			{#if post.printYear}
				<p class="mb-3 text-lg font-semibold">{new Date(post.published).getFullYear()}</p>
			{/if}
			<a class="flex" href={`/blog/${post.slug}`} title={post.title}>
				<p class="mt-1 w-16 text-sm">{formatDateShort(post.published)}</p>
				<div class="flex-1">
					<h2 class="text-2xl font-bold">
						{post.title}
					</h2>
					<p class="text-base">{post.description}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
