<script lang="ts">
	import type { Post } from '$lib/types/post';
	import { formatDate } from '$lib/utils/formate-date';

	interface Props {
		posts?: Post[];
	}

	let { posts = [] }: Props = $props();
</script>

<ul class="w-full space-y-[24px]" style:--step="0.1s" style:--duration="0.4s">
	{#each posts as post, index}
		<li style:--stagger={index} class="post w-full">
			<article>
				<a
					href={`/blog/${post.slug}`}
					class="block w-full bg-transparent p-4 transition-colors duration-200 hover:bg-skin-card/70"
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
					<p class="text-sm text-skin-base/50">{formatDate(post.date)}</p>
					<p class="mt-[16px]">{post.excerpt}</p>
				</a>
			</article>
		</li>
	{/each}
</ul>

<style lang="postcss">
	.post + .post {
		@apply border-t border-skin-line;
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
