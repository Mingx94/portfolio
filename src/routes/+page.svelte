<script lang="ts">
	import { description, title, url, socialLinks } from '$lib/config';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`${url}/home.jpg`} />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="400" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={`${url}/home.jpg`} />
</svelte:head>

<section
	style:--duration="0.8s"
	style:--step="0.5s"
	class="mx-auto my-auto flex max-w-[50rem] flex-col justify-center px-[1.5rem] children:animate-[fade-in-up] children:animate-delay-[--delay] children:animate-duration-[--duration] children:animate-fill-both children:animate-ease-in-out sm:px-[30px]"
>
	<h1 style:--delay="calc(var(--step) * 0)" class="mb-2 text-5xl text-skin-base">Michael Tsai</h1>
	<p style:--delay="calc(var(--step) * 1)" class="mb-4 text-skin-base/80">
		Hello, I'm Michael Tsai, a software engineer and an enthusiastic photographer.
	</p>
	<ul
		style:--delay="calc(var(--step) * 2)"
		class="mb-2 flex animate-[fade-in-up] items-center gap-2"
	>
		<li>
			<a
				href="/blog"
				class="text-skin-base transition-colors duration-200 hover:text-skin-accent/80"
			>
				Blog
			</a>
		</li>
		<li class="separator"></li>
		<li>
			<a
				href="/albums"
				class="text-skin-base transition-colors duration-200 hover:text-skin-accent/80"
			>
				Albums
			</a>
		</li>
		<li class="separator"></li>
		<li>
			<a
				href="/rss.xml"
				class="text-skin-base transition-colors duration-200 hover:text-skin-accent/80"
				target="_blank"
			>
				RSS
			</a>
		</li>
	</ul>
	<ul style:--delay="calc(var(--step) * 3)" class="flex animate-[fade-in-up] gap-2">
		{#each socialLinks as socialLink}
			<li>
				<a
					href={socialLink.url}
					target="_blank"
					rel="noopener noreferrer nofollow"
					class="text-skin-base transition-colors duration-200 hover:text-skin-accent/80"
					title={socialLink.name}
				>
					<div class="size-[28px] {socialLink.icon}" role="img" title={socialLink.name} />
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.separator {
		@apply h-[18px] w-[1px] border-l-[2px] border-skin-fill/50;
	}
</style>
