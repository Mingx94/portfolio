<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { theme } from '$lib/stores/theme.svelte';
</script>

<header class="sticky left-0 top-0 isolate z-10 w-full">
	<div class="container flex items-center justify-between p-4 sm:p-8">
		<a href="/" title="Varitfact" class="group top-[12px] flex items-center gap-[8px]">
			<img
				src={logo}
				alt="Logo"
				width="28"
				height="28"
				class="size-[28px] transition-transform duration-[1s] group-hover:rotate-180"
			/>
			<span class="text-2xl duration-[1s]">Vartifact</span>
		</a>

		<button
			onclick={() => theme.change(theme.preferred === 'light' ? 'dark' : 'light')}
			class="flex transition-colors duration-200"
			title="Toggle theme"
			aria-label="Toggle theme"
		>
			<span
				class={'size-[28px] ' +
					(theme.preferred === 'light' ? 'i-iconoir-half-moon' : 'i-iconoir-sun-light')}
				aria-hidden="true"
			></span>
		</button>
	</div>
</header>

<style>
	header {
		background-color: rgb(var(--color-bg));
		background-image: url('/texture.png');
	}
</style>
