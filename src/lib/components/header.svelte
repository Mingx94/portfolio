<script lang="ts">
	import logo from '$lib/assets/logo.svg';

	import { page } from '$app/stores';

	let isOpen = $state(false);
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

<header class="sticky left-0 top-0 isolate z-10 w-full bg-skin-fill">
	<div
		class="px-16px mx-auto flex max-w-[50rem] items-center justify-between sm:px-[24px] sm:py-[24px]"
	>
		<a
			href="/"
			title="Varitfact"
			class="group top-[12px] flex items-center gap-[8px] max-sm:absolute max-sm:left-[16px]"
		>
			<img
				src={logo}
				alt="Logo"
				width="28"
				height="28"
				class="size-[28px] transition-transform duration-[1s] group-hover:rotate-180"
			/>
			<span class="text-2xl duration-[1s] group-hover:scale-[1.02] group-hover:transform"
				>Vartifact</span
			>
		</a>

		<nav
			class="sm:px-14px flex w-full flex-col items-center py-[8px] text-xl sm:w-auto sm:flex-row"
		>
			<button
				class="focus:outline-2px focus:outline-offset-1px self-end p-[0.5rem] focus:outline-skin-fill sm:hidden"
				tabindex="0"
				aria-label="Open Menu"
				aria-expanded={isOpen}
				aria-controls="menu-items"
				onclick={() => (isOpen = !isOpen)}
			>
				<div
					class="text-2xl {isOpen ? 'i-iconoir-menu-scale' : 'i-iconoir-menu'}"
					tabindex="-1"
				></div>
			</button>
			<ul
				id="menu-items"
				class="items-center sm:!mt-0 sm:!flex sm:space-x-[1rem] {!isOpen && 'max-sm:!hidden'}"
			>
				{#each navLinks as navLink}
					<li class="px-[1rem] py-[0.75rem] sm:px-[0.5rem] sm:py-[0.25rem]">
						<a
							href={navLink.href}
							class="hover:text-skin-accent/75"
							class:text-skin-accent={$page.url.pathname === navLink.href}
							onclick={() => (isOpen = false)}
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
	#menu-items {
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
