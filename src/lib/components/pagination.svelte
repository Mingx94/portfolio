<script lang="ts">
	import { goto } from '$app/navigation';
	import { postsPerPage } from '$lib/config';

	interface Props {
		currentPage: number;
		totalPage: number;
		path?: string;
	}

	let { currentPage = $bindable(), totalPage, path = '/blog/page' }: Props = $props();

	let pagesAvailable = $derived(Math.ceil(totalPage / postsPerPage));

	const isCurrentPage = (page: number) => page == currentPage;

	function setPage(page: number) {
		if (isCurrentPage(page)) return;
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
					<button
						onclick={() => setPage(currentPage - 1)}
						disabled={currentPage === 1}
						aria-label="Previous page"
					>
						<span class="i-iconoir-nav-arrow-left size-[28px]"></span>
					</button>
				</li>
				{#each Array(totalPage)
					.fill(0)
					.map((_, i) => i + 1) as page}
					{#if page === currentPage}
						<li><button class="active">{page}</button></li>
					{:else if page === 1 || page === totalPage || Math.abs(page - currentPage) <= 1 || page === currentPage - 1 || page === currentPage + 1}
						<li>
							<button onclick={() => setPage(page)} aria-label={`Page ${page}`}>{page}</button>
						</li>
					{:else if page < currentPage - 1 && page === 2}
						<li>...</li>
					{:else if page > currentPage + 1 && page === totalPage - 1}
						<li>...</li>
					{/if}
				{/each}
				<li>
					<button
						onclick={() => setPage(currentPage + 1)}
						disabled={currentPage === totalPage}
						aria-label="Next page"
					>
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
		@apply bg-transparent transition-colors duration-200 hover:bg-skin-card/80;
	}

	button.active {
		cursor: default;
		@apply bg-black text-white;
	}

	button:disabled {
		@apply text-gray-400;
	}
</style>
