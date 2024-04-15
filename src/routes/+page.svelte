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
	class="mx-auto my-auto flex max-w-[50rem] flex-col justify-center px-[1.5rem] sm:px-[30px]"
>
	<h1
		class="mb-[20px] animate-[fade-in-up] text-[48px] text-skin-base animate-duration-[1.2s] animate-fill-both animate-ease-in-out"
	>
		Michael Tsai
	</h1>
	<p
		style:--delay="0.8s"
		class="mb-[20px] animate-[fade-in-up] text-[16px] text-skin-base/80 animate-delay-[--delay] animate-duration-[1.2s] animate-fill-both animate-ease-in-out"
	>
		Hello, I'm Michael Tsai, a software engineer and an enthusiastic photographer.
	</p>

	<ul
		style:--delay="1.6s"
		class="mb-[12px] flex animate-[fade-in-up] items-center gap-[8px] animate-delay-[--delay] animate-duration-[1.2s] animate-fill-both animate-ease-in-out"
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
	<ul
		style:--delay="2.4s"
		class="flex animate-[fade-in-up] gap-[8px] animate-delay-[--delay] animate-duration-[1.2s] animate-fill-both animate-ease-in-out"
	>
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
