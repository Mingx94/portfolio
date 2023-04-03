<script lang="ts">
	import type { LayoutServerData } from './$types';
	import './styles.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';

	export let data: LayoutServerData;
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<!-- <li><a href="/albums">Albums</a></li> -->
		</ul>
	</nav>
</header>

<OverlayScrollbarsComponent
	class="os-wrapper"
	options={{
		scrollbars: {
			theme: 'os-theme-light'
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
		background-color: #000;
		flex-shrink: 0;
		position: sticky;
		top: 0;
		z-index: 1;
	}
	nav {
		padding: 16px 20px;
	}
	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		margin-right: 16px;
	}

	a {
		color: #fff;
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
