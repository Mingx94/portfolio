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

<header>
	<button class="hamburger" on:click={toggleMenu} class:is-active={isMenuOpen}>
		<span class="hamburger__line" />
		<span class="hamburger__line" />
		<span class="hamburger__line" />
	</button>

	<nav class:is-active={isMenuOpen}>
		<ul class="main-nav">
			<li>
				<a href="/" title="Home">
					<img src={logo} alt="Logo" width="28" height="28" />
					Home
				</a>
			</li>
		</ul>

		<ul class="right-nav">
			<li>
				<a href="/about" title="About">
					<img src={about} alt="About" width="28" height="28" />
					About Me
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/michael.tsai_94/" target="_blank" title="Instagram">
					<img src={instagram} alt="Instagram" width="28" height="28" />
					Instagram
				</a>
			</li>
			<li>
				<a href="https://github.com/Mingx94/photo-gallery" target="_blank" title="GitHub">
					<img src={github} alt="GitHub" width="28" height="28" />
					GitHub
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: #fff;
		flex-shrink: 0;
		position: sticky;
		top: 0;
		z-index: 2;
		isolation: isolate;
	}

	.hamburger {
		all: unset;
		display: none;
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

	.main-nav,
	.right-nav {
		display: flex;
		gap: 1rem;
	}
	.right-nav {
		margin-left: auto;
	}

	li a {
		color: #18181b;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.hamburger {
			cursor: pointer;
			height: 46px;
			width: 46px;
			margin-left: auto;

			display: flex;
			flex-direction: column;
			justify-content: center;
			transform: scale(0.6);
			gap: 6px;
		}

		.hamburger .hamburger__line {
			background-color: #18181b;
			display: block;
			height: 4px;
			width: 40px;
			border-radius: 999px;
			transition: all 0.2s ease-in-out;
		}

		.hamburger.is-active .hamburger__line:nth-child(1) {
			transform: translate3d(-8px, 0px, 0) rotate(-45deg) scaleX(0.7);
		}
		.hamburger.is-active .hamburger__line:nth-child(3) {
			transform: translate3d(-8px, -0px, 0) rotate(45deg) scaleX(0.7);
		}

		nav {
			position: fixed;
			right: 0;
			left: 0;
			top: 46px;
			bottom: 0;
			z-index: 1;

			flex-direction: column;
			gap: 2rem;
			overflow: hidden;
			background-color: #fff;
			transition: all 0.2s ease-in-out;
		}
		.main-nav,
		.right-nav {
			flex-direction: column;
			align-items: center;
			gap: 2rem;
		}

		:where(.main-nav, .right-nav) li {
			width: calc(100% - 80px);
			max-width: 360px;
			padding-left: 20px;
			margin: 0 80px 0 0;
		}

		.right-nav {
			margin: 0;
		}

		nav:not(.is-active) {
			right: -100%;
			left: 100%;
		}
	}
</style>
