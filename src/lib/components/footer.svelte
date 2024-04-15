<script lang="ts">
	import { page } from '$app/stores';
	import { socialLinks } from '$lib/config';
</script>

<footer
	class="mx-auto mt-auto w-full max-w-[50rem] px-[1.5rem] sm:px-[30px]"
	class:mb-80px={$page.url.pathname === '/resume'}
	class:md:mb-0={$page.url.pathname === '/resume'}
>
	<div class="mb-[16px]">
		<hr class="border-skin-line" />
	</div>
	<div class="mb-[16px] flex flex-col items-center justify-center sm:flex-row-reverse">
		<ul class="mb-[16px] flex gap-[16px] sm:mb-0 sm:ml-auto">
			{#each socialLinks as socialLink}
				<li>
					<a
						href={socialLink.url}
						target="_blank"
						rel="noopener noreferrer nofollow"
						class="flex items-center gap-[8px] text-skin-base hover:text-skin-accent/75"
						title={socialLink.name}
					>
						<div
							class="size-[28px] {socialLink.icon}"
							role="img"
							aria-label={socialLink.name}
						></div>
					</a>
				</li>
			{/each}
			<li>
				<a
					href="/rss.xml"
					target="_blank"
					rel="noopener noreferrer nofollow"
					class="flex items-center gap-[8px] text-skin-base hover:text-skin-accent/75"
					title="RSS"
				>
					<div class="i-iconoir-rss-feed size-[28px]" role="img" aria-label="RSS"></div>
				</a>
			</li>
		</ul>
		<p class="text-blueGray-800 text-center text-sm">Michael Tsai © 2024</p>
	</div>
</footer>
