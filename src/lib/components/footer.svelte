<script lang="ts">
	import { page } from '$app/stores';
	import { albumLink, links } from '$lib/site/config';
	import Icon from '@iconify/svelte';
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
					>
						<span class="sr-only">{link.name}</span>
						<Icon icon={link.icon} class="size-[28px]" aria-hidden />
					</a>
				</li>
			{/each}
			{#if !$page.url.pathname.startsWith('/albums')}
				<li>
					<a href={albumLink.url} class="flex" title={albumLink.name}>
						<span class="sr-only">{albumLink.name}</span>
						<Icon icon={albumLink.icon} class="size-[28px]" aria-hidden />
					</a>
				</li>
			{/if}
		</ul>
		<p class="text-center text-sm">Michael Tsai © {year}</p>
	</div>
</footer>
