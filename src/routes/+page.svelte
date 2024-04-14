<script lang="ts">
	import { description, title, url } from '$lib/config';
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

<section class="mx-auto flex max-w-[50rem] flex-col justify-center px-[1.5rem] sm:px-[30px]">
	<h1
		class="md:text-[60px] md:mb-[24px] mb-[12px] animate-[fade-in-up] text-[48px] text-skin-base animate-duration-[1.2s] animate-fill-both animate-ease-in-out"
	>
		Hi, I'm <span class="text-nowrap">Michael Tsai.</span>
	</h1>
	<p
		class="md:text-36px md:mb-[24px] mb-[12px] animate-[fade-in-up] text-[24px] text-skin-accent animate-delay-[0.8s] animate-duration-[1.2s] animate-fill-both animate-ease-in-out"
	>
		Engineer and photography
	</p>
</section>
