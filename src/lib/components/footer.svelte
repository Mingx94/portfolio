<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/icon.svelte';
	import { albumLink, links } from '$lib/site/config';
	import { createSeparator, melt } from '@melt-ui/svelte';

	const {
		elements: { root }
	} = createSeparator({
		orientation: 'horizontal'
	});

	const year = new Date().getFullYear();
</script>

<footer class="site-width mt-20 px-4 sm:px-8">
	<div class="mb-4">
		<div use:melt={$root} class="h-[1px] w-full bg-stone-500"></div>
	</div>
	<div class="mb-4 flex flex-col items-center justify-center sm:flex-row-reverse">
		<ul class="mb-4 flex gap-4 sm:mb-0 sm:ml-auto">
			{#each links as link}
				<li>
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer nofollow"
						class="flex"
						title={link.name}
						aria-label={link.name}
					>
						<Icon icon={link.icon} class="size-[28px]" />
					</a>
				</li>
			{/each}
			{#if !$page.url.pathname.startsWith('/albums')}
				<li>
					<a href={albumLink.url} class="flex" title={albumLink.name} aria-label={albumLink.name}>
						<Icon icon={albumLink.icon} class="size-[28px]" />
					</a>
				</li>
			{/if}
		</ul>
		<p class="text-center text-sm">Michael Tsai © {year}</p>
	</div>
</footer>
