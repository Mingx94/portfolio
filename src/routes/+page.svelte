<script lang="ts">
	import github from '$lib/assets/github.svg';
	import instagram from '$lib/assets/instagram.svg';
	import { title, description, url } from '$lib/config'
	
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
	class="max-w-1400px mx-auto px-20px xl:px-40px font-400 min-h-inherit flex justify-center flex-col "
>
	<h1 class="text-48px md:text-60px mb-12px md:mb-24px text-blueGray-800">
		Hi, I'm <span class="text-nowrap">Michael Tsai.</span>
	</h1>
	<p class="text-24px md:text-36px text-fuchsia-600 mb-12px md:mb-24px">A Front-end engineer and photography enthusiast.</p>

	<!-- External links -->
	<ul class="flex gap-24px sm:gap-16px">
		<li>
			<a
				href="https://github.com/Mingx94/photo-gallery"
				target="_blank"
				class="flex items-center gap-8px"
			>
				<img src={github} alt="GitHub" class="w-28px h-28px" />
			</a>
		</li>
		<li>
			<a
				href="https://www.instagram.com/michael.tsai_94/"
				target="_blank"
				class="flex items-center gap-8px"
			>
				<img src={instagram} alt="Instagram" class="w-28px h-28px" />
			</a>
		</li>
	</ul>
</section>
