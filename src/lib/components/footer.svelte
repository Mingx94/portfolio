<script lang="ts">
	import { page } from '$app/stores';
</script>

<footer
	class="flex items-center justify-center h-80px w-full"
	class:mb-80px={$page.url.pathname === '/resume'}
	class:md:mb-0={$page.url.pathname === '/resume'}
>
	<p class="text-center text-gray-500 text-sm">Michael Tsai © 2024</p>
</footer>
