<script lang="ts">
	import { description, title, url } from '$lib/config';

	const socialLinks = [
		{
			name: 'Github',
			url: 'https://github.com/Mingx94/photo-gallery',
			icon: 'i-iconoir:github'
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/michael.tsai_94/',
			icon: 'i-iconoir:instagram'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/ming-xuan-tsai-821157171/',
			icon: 'i-iconoir:linkedin'
		},
		{
			name: 'RSS',
			url: `${url}/rss.xml`,
			icon: 'i-iconoir:rss-feed'
		}
	];
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
	class="max-w-1400px mx-auto px-20px xl:px-40px font-400 min-h-inherit flex justify-center flex-col"
>
	<h1
		class="text-48px md:text-60px mb-12px md:mb-24px text-blueGray-800 animate-[fade-in-up] animate-both animate-duration-1200 animate-ease-in-out"
	>
		Hi, I'm <span class="text-nowrap">Michael Tsai.</span>
	</h1>
	<p
		class="text-24px md:text-36px text-fuchsia-600 mb-12px md:mb-24px animate-[fade-in-up] animate-both animate-delay-800 animate-duration-1200 animate-ease-in-out"
	>
		A Front-end engineer and photography enthusiast.
	</p>

	<!-- Social links -->
	<ul
		class="flex gap-24px sm:gap-16px animate-[fade-in-up] animate-both animate-delay-1600 animate-duration-1200 animate-ease-in-out"
	>
		{#each socialLinks as socialLink}
			<li>
				<a
					href={socialLink.url}
					target="_blank"
					rel="noopener noreferrer nofollow"
					class="flex items-center gap-8px"
					title={socialLink.name}
				>
					<div
						class="sq-28px text-#888 {socialLink.icon}"
						role="img"
						title="{socialLink.name} icon"
					/>
				</a>
			</li>
		{/each}
	</ul>
</section>
