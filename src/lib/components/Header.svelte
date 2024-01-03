<script lang="ts">
	import logo from '$lib/assets/logo.svg';

	import { page } from '$app/stores';

	const navLinks = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Albums',
			href: '/albums',
		},
		{
			name: 'Resume',
			href: '/resume',
		}
	];
</script>

<header class="fixed w-full left-0 top-0 z-10 isolate bg-rose-50 xl:bg-transparent">
	<div class="h-64px flex items-center justify-between px-20px xl:px-40px max-w-1400px mx-auto">
		<div class="font-normal text-20px inline-block">
			<a href="/" title="Coding Shutter" class="flex items-center gap-8px">
				<img
					src={logo}
					alt="Logo"
					class="w-28px h-28px transition-transform hover:rotate-180 duration-1s"
				/>
			</a>
		</div>
		<!-- Island -->
		<nav
			class="absolute bg-white/80 backdrop-blur-lg h-40px top-12px left-1/2 -translate-x-1/2 rounded-full px-14px py-8px shadow-md text-14px flex items-center"
		>
			<ul class="flex items-center space-x-8px">
				{#each navLinks as navLink}
					<li>
						<a
							href={navLink.href}
							class:text-blue-600={$page.url.pathname === navLink.href}
						>
							{navLink.name}
						</a>
					</li>
				{/each}
		</nav>
	</div>
</header>
