<script lang="ts" context="module">
	import { fade } from 'svelte/transition';
	import { crossfade } from './crossfade';

	let [send, receive] = crossfade({
		fallback: (node, params, flyingTo) =>
			fade(node, {
				...params,
				duration: 300,
				delay: flyingTo ? 200 : 0
			}),
		delay: 0,
		duration: (d) => Math.max(700, Math.sqrt(d) * 30)
	});
</script>

<script lang="ts">
	export let src: string;
	let className = '';
	export { className as class };

	export let alt = '';
	export let loading: 'eager' | 'lazy' = 'eager';
	export let transitionId: string | number;
	export let title: string = '';
</script>

<figure
	class="img-wrapper {className}"
	out:send={{ key: transitionId }}
	in:receive={{ key: transitionId }}
>
	<img {src} {alt} {loading} crossorigin="anonymous" />
	{#if title}
		<figcaption class="img-title">{title}</figcaption>
	{/if}
</figure>

<style>
	.img-wrapper {
		position: relative;
		margin: 0;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.img-title {
		background-color: #000;
		width: 100%;
		text-align: center;
		padding: 16px 20px;
		color: #fff;
		position: absolute;
		bottom: 0;
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: 1;

		/* ellipsis */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.img-wrapper:hover .img-title {
		opacity: 1;
	}
</style>
