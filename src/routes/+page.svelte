<script lang="ts">
	import { siteDescription, siteTitle, siteUrl, socialLinks } from '$lib/config';
	import { getColorSchemeContext } from '$lib/contexts/theme';

	const { preferred, change } = getColorSchemeContext();
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:image" content={`${siteUrl}/home.jpg`} />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="400" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={`${siteUrl}/home.jpg`} />
</svelte:head>

<section
	class="mx-auto my-auto flex max-w-[50rem] flex-col justify-center px-[1.5rem] sm:px-[30px]"
>
	<h1 style:--stagger="0" class="mb-2 text-5xl text-skin-base">Michael Tsai</h1>
	<p style:--stagger="1" class="mb-4 text-skin-base/80">
		Hello, I'm Michael Tsai, a software engineer and an enthusiastic photographer.
	</p>
	<ul style:--stagger="2" class="mb-2 flex items-center gap-2">
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
	<ul style:--stagger="3" class="flex gap-2">
		{#each socialLinks as socialLink}
			<li>
				<a
					href={socialLink.url}
					target="_blank"
					rel="noopener noreferrer nofollow"
					class="flex text-skin-base transition-colors duration-200 hover:text-skin-accent/80"
					title={socialLink.name}
				>
					<span class="size-[28px] {socialLink.icon}" role="img" title={socialLink.name}></span>
				</a>
			</li>
		{/each}
		<li>
			<button
				on:click={() => change($preferred === 'light' ? 'dark' : 'light')}
				class="flex text-skin-base transition-colors duration-200 hover:text-skin-accent/80"
				title="Toggle theme"
			>
				<span
					class={'size-[28px] ' + ($preferred === 'light' ? 'i-tabler-moon' : 'i-tabler-sun-high')}
					aria-hidden="true"
				></span>
			</button>
		</li>
	</ul>
</section>

<style lang="postcss">
	.separator {
		@apply h-[18px] w-[1px] border-l-[2px] border-skin-fill/50;
	}

	section > * {
		animation: fade-in-up var(--duration) ease;
		animation-fill-mode: both;
		animation-delay: calc(var(--delay) * var(--stagger));
	}
</style>
