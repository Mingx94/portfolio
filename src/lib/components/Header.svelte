<script lang="ts">
	import github from '$lib/assets/github.svg';
	import instagram from '$lib/assets/instagram.svg';
	import logo from '$lib/assets/logo.svg';
	import about from '$lib/assets/about.svg';
</script>

<header class="fixed w-full left-0 top-0 z-10 isolate bg-white/80 backdrop-blur-lg">
	<div class="h-48px flex flex-items-center px-20px xl:px-40px max-w-1400px mx-auto">
		<div class="font-normal text-20px inline-block mr-auto">
			<a href="/" title="Coding Shutter" class="flex flex-items-center gap-8px">
				<img src={logo} alt="Logo" class="w-28px h-28px transition-transform hover:rotate-180 duration-1s" />
			</a>
		</div>
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
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/michael.tsai_94/"
						target="_blank"
						class="flex flex-items-center gap-8px"
					>
						<img src={instagram} alt="Instagram" class="w-28px h-28px" />
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
