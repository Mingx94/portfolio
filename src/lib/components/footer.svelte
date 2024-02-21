<script lang="ts">
	import { page } from '$app/stores';

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
		}
	];
</script>

<footer
	class="w-full mt-auto max-w-50rem mx-auto px-16px"
	class:mb-80px={$page.url.pathname === '/resume'}
	class:md:mb-0={$page.url.pathname === '/resume'}
>
	<div class="mb-16px">
		<hr class="border-gray-300" />
	</div>
	<div class="flex items-center justify-center sm:flex-row-reverse flex-col mb-16px">
		<ul class="sm:ml-auto sm:mb-0 mb-16px flex gap-16px">
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
							class="sq-28px text-blueGray-800 hover:text-blueGray-400 {socialLink.icon}"
							role="img"
							title={socialLink.name}
						/>
					</a>
				</li>
			{/each}
		</ul>
		<p class="text-center text-blueGray-800 text-sm">Michael Tsai © 2024</p>
	</div>
</footer>
