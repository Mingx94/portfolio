<script lang="ts">
	import github from '$lib/assets/github.svg';
	import instagram from '$lib/assets/instagram.svg';
	import logo from '$lib/assets/logo.svg';
	import about from '$lib/assets/about.svg';
	import { navigating } from '$app/stores';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	$: if ($navigating) {
		isMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-10 isolate bg-white">
	<div class="h-48px flex flex-items-center px-20px xl:px-40px max-w-1400px mx-auto">
		<h1 class="font-normal text-20px inline-block mr-auto">
			<a href="/" title="Coding Shutter" class="flex flex-items-center gap-8px">
				<img src={logo} alt="Logo" class="w-28px h-28px" />
				<span class="hidden sm:inline">Coding Shutter</span>
			</a>
		</h1>
		<nav>
			<ul class="flex gap-24px sm:gap-16px">
				<li>
					<a href="/about" class="flex flex-items-center gap-8px">
						<img src={about} alt="About" class="w-28px h-28px" />
						<span class="hidden sm:inline">關於我</span>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/Mingx94/photo-gallery"
						target="_blank"
						class="flex flex-items-center gap-8px"
					>
						<img src={github} alt="GitHub" class="w-28px h-28px" />
						<span class="hidden sm:inline">原始碼</span>
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/michael.tsai_94/"
						target="_blank"
						class="flex flex-items-center gap-8px"
					>
						<img src={instagram} alt="Instagram" class="w-28px h-28px" />
						<span class="hidden sm:inline">Instagram</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
