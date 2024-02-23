<script lang="ts">
	import logo from '$lib/assets/logo.svg';

	import { page } from '$app/stores';

	let isOpen = false;
	const navLinks = [
		{
			name: '相簿',
			href: '/albums'
		},
		{
			name: '文章',
			href: '/blog'
		}
	];
</script>

<header class="sticky w-full left-0 top-0 z-10 isolate bg-skin-fill sm:bg-transparent">
	<div class="flex items-center justify-between px-20px sm:py-2rem sm:px-40px max-w-50rem mx-auto">
		<div class="absolute sm:static sm:top-unset top-8px">
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
		<nav class="sm:px-14px py-8px text-xl flex items-center flex-col sm:flex-row w-full sm:w-auto">
			<button
				class="sm:hidden self-end p-0.5rem focus:(outline-2px outline-offset-1px outline-skin-fill)"
				tabindex="0"
				aria-label="Open Menu"
				aria-expanded={isOpen}
				aria-controls="menu-items"
				on:click={() => (isOpen = !isOpen)}
			>
				<div class="text-2xl {isOpen ? 'i-iconoir:menu-scale' : 'i-iconoir:menu'}" tabindex="-1" />
			</button>
			<ul id="menu-items" class="menu-items sm:flex items-center sm:space-x-1rem" class:!max-sm:hidden={!isOpen}>
				{#each navLinks as navLink}
					<li class="px-1rem sm:px-0.5rem sm:py-0.25rem py-0.75rem">
						<a
							href={navLink.href}
							class="font-mono hover:text-skin-accent/75"
							class:text-skin-accent={$page.url.pathname === navLink.href}
							on:click={() => (isOpen = false)}
						>
							{navLink.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.menu-items {
		grid-template-rows: repeat(2, minmax(0, 1fr));
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.5rem;
		width: 11rem;
		margin-top: 0.5rem;
		display: grid;
	}
	#menu-items li {
		grid-column: span 2 / span 2;
		justify-content: center;
		align-items: center;
		display: flex;
	}
</style>
