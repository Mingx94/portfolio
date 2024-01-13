<script lang="ts">
	export let href: string;
	export let title: string;
	export let target: string;
	export let rel = 'noopener noreferrer nofollow';
</script>

<a
	{href}
	{title}
	{rel}
	{target}
	class="not-prose underline underline-offset-3 decoration-2 underline-solid underline-cyan hover:underline-cyan-2"
>
	<slot />
</a>
