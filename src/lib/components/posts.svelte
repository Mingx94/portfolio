<script lang="ts">
	import type { Post } from '$lib/types/post';
	import { formatDate } from '$lib/utils/formate-date';

	export let posts: Post[] = [];
</script>

<ul class="-mx-4 w-full space-y-[24px]" style:--step="0.1s" style:--duration="0.4s">
	{#each posts as post, index}
		<li style:--stagger={index} class="post w-full">
			<article>
				<a
					href={`/blog/${post.slug}`}
					class="block w-full bg-transparent p-4 transition-colors duration-200 hover:bg-gray-200/50"
				>
					<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
						class="h-auto w-full max-w-full"
					/>
					<h2 class="title decoration-solid">{post.title}</h2>
					<p class="text-sm text-gray-500">{formatDate(post.date)}</p>
					<p class="mt-[16px]">{post.excerpt}</p>
				</a>
			</article>
		</li>
	{/each}
</ul>

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
