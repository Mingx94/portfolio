<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<figure>
	<img {src} {alt} class="w-full" />
	<figcaption class="mt-[4px] text-center">{alt}</figcaption>
</figure>
