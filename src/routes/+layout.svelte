<script lang="ts">
	import type { LayoutServerData } from './$types';
	import './styles.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';

	export let data: LayoutServerData;
</script>

<header>
	<nav>
		<ul class="main-nav">
			<li>
				<a href="/" title="Home">
					<img src="/favicon.svg" alt="Home" width="28" height="28" />
					Home
				</a>
			</li>
		</ul>

		<ul class="external-nav">
			<li>
				<a href="https://www.instagram.com/michael.tsai_94/" target="_blank" title="Instagram">
					<img src="/instagram.svg" alt="Instagram" width="28" height="28" />
					Instagram
				</a>
			</li>
			<li>
				<a href="https://github.com/Mingx94/photo-gallery" target="_blank" title="GitHub">
					<img src="/github.svg" alt="GitHub" width="28" height="28" />
					GitHub
				</a>
			</li>
		</ul>
	</nav>
</header>

<OverlayScrollbarsComponent
	class="os-wrapper"
	options={{
		scrollbars: {
			theme: 'os-theme-dark',
			autoHide: 'move',
			autoHideDelay: 1000
		}
	}}
>
	<div class="page-container">
		{#key data.pathname}
			<main class="page-wrapper">
				<slot />
			</main>
		{/key}
	</div>
</OverlayScrollbarsComponent>

<style>
	header {
		background-color: #fff;
		flex-shrink: 0;
		position: sticky;
		top: 0;
		z-index: 1;
	}
	nav {
		padding: 16px 20px;
		display: flex;
	}
	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.external-nav {
		margin-left: auto;
	}

	li:not(:last-child) {
		margin-right: 0.5rem;
	}

	li a {
		color: #18181b;
		display: flex;
		align-items: center;
		gap: 0.3rem;
		text-decoration: none;
	}
	.page-container {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: minmax(0, 1fr);
		width: 100%;
		height: 100%;
	}
	.page-wrapper {
		grid-row-start: 1;
		grid-column-start: 1;
	}
	:global(.os-wrapper) {
		width: 100%;
		flex: 1 1 0;
	}
</style>
