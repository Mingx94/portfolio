<script lang="ts">
	import { page } from '$app/stores';
	import { links } from '$lib/site/config';
	import { createSeparator, melt } from '@melt-ui/svelte';

	const {
		elements: { root }
	} = createSeparator({
		orientation: 'horizontal'
	});

	const year = new Date().getFullYear();
</script>

<footer
	class="container mt-20 px-4 sm:px-8"
	class:mb-80px={$page.url.pathname === '/resume'}
	class:md:mb-0={$page.url.pathname === '/resume'}
>
	<div class="mb-4">
		<div use:melt={$root} class="h-[1px] w-full bg-stone-500"></div>
	</div>
	<div class="mb-4 flex flex-col items-center justify-center sm:flex-row-reverse">
		<ul class="mb-4 flex gap-4 sm:mb-0 sm:ml-auto">
			{#each links as socialLink}
				<li>
					<a
						href={socialLink.url}
						target="_blank"
						rel="noopener noreferrer nofollow"
						class="flex items-center gap-[8px]"
						title={socialLink.name}
						aria-label={socialLink.name}
					>
						<div
							class="size-[28px] {socialLink.icon}"
							role="img"
							aria-label={socialLink.name}
						></div>
					</a>
				</li>
			{/each}
		</ul>
		<p class="text-center text-sm">Michael Tsai © {year}</p>
	</div>
</footer>
