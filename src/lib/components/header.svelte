<script lang="ts">
	import logo from '$lib/assets/logo.svg';

	import { page } from '$app/stores';

	const navLinks = [
		{
			name: 'Albums',
			href: '/albums'
		},
		{
			name: 'Articles',
			href: '/blog'
		}
	];
</script>

<header class="sticky w-full left-0 top-0 z-10 isolate bg-skin-fill sm:bg-transparent">
	<div class="flex items-center justify-between px-20px py-2rem sm:px-40px max-w-50rem mx-auto">
		<div class="inline-block">
			<a href="/" title="Varitfact" class="flex items-center gap-8px group">
				<img
					src={logo}
					alt="Logo"
					width="28"
					height="28"
					class="w-28px h-28px transition-transform group-hover:rotate-180 duration-1s"
				/>
				<span class="font-mono text-2xl group-hover:transform group-hover:scale-102 duration-1s"
					>Varitfact</span
				>
			</a>
		</div>
		<!-- Island -->
		<nav class="px-14px py-8px text-xl flex items-center">
			<ul class="flex items-center space-x-1rem">
				{#each navLinks as navLink}
					<li>
						<a
							href={navLink.href}
							class="font-mono hover:text-skin-accent"
							class:text-blue-600={$page.url.pathname === navLink.href}
						>
							{navLink.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
