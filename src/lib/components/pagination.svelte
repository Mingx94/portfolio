<script lang="ts">
	import { goto } from '$app/navigation';
	import { postsPerPage } from '$lib/config';

	export let currentPage: number;
	export let totalPage: number;
	export let path = '/blog/page';

	$: pagesAvailable = Math.ceil(totalPage / postsPerPage);

	const isCurrentPage = (page: number) => page == currentPage;

	function setPage(page: number) {
		if (page >= 1 && page <= totalPage) {
			currentPage = page;
			goto(`${path}/${page}`);
		}
	}
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
	{#if pagesAvailable > 1}
	<nav aria-label="Pagination navigation" class="mx-auto my-12">
		<ul class="flex items-center justify-center">
			<li>
				<button on:click={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
					<span class="i-iconoir-nav-arrow-left size-[28px]"></span>
				</button>
			</li>
			{#each Array(totalPage)
				.fill(0)
				.map((_, i) => i + 1) as page}
				{#if page === currentPage}
					<li><button class="active">{page}</button></li>
				{:else if page === 1 || page === totalPage || Math.abs(page - currentPage) <= 1 || page === currentPage - 1 || page === currentPage + 1}
					<li><button on:click={() => setPage(page)}>{page}</button></li>
				{:else if page < currentPage - 1 && page === 2}
					<li>...</li>
				{:else if page > currentPage + 1 && page === totalPage - 1}
					<li>...</li>
				{/if}
			{/each}
			<li>
				<button on:click={() => setPage(currentPage + 1)} disabled={currentPage === totalPage}>
					<span class="i-iconoir-nav-arrow-right size-[28px]"></span>
				</button>
			</li>
		</ul>
	</nav>
	{/if}
{/key}

<style lang="postcss">
	li {
		margin: 0 8px;
	}
	button {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button:not(:disabled, .active) {
		cursor: pointer;
		@apply bg-transparent transition-colors duration-200 hover:bg-gray-200/50;
	}

	button.active {
		cursor: default;
		@apply bg-black text-white;
	}

	button:disabled {
		@apply text-gray-400;
	}
</style>
