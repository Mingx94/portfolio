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
>
	<slot />
</a>
