<script lang="ts">
	import ArrowLeft from '~icons/iconoir/arrow-left';
	import ArrowRight from '~icons/iconoir/arrow-right';
	import Camera from '~icons/iconoir/camera';
	import Github from '~icons/iconoir/github';
	import Moon from '~icons/iconoir/half-moon';
	import Instagram from '~icons/iconoir/instagram';
	import Linkedin from '~icons/iconoir/linkedin';
	import RssFeed from '~icons/iconoir/rss-feed-tag';
	import Sun from '~icons/iconoir/sun-light';

	let {
		icon,
		class: className
	}: {
		icon:
			| 'camera'
			| 'github'
			| 'instagram'
			| 'linkedin'
			| 'rss-feed'
			| 'sun-light'
			| 'half-moon'
			| 'arrow-left'
			| 'arrow-right';
		class?: string;
	} = $props();

	const Icon = {
		camera: Camera,
		github: Github,
		instagram: Instagram,
		linkedin: Linkedin,
		'rss-feed': RssFeed,
		'sun-light': Sun,
		'half-moon': Moon,
		'arrow-left': ArrowLeft,
		'arrow-right': ArrowRight
	};

	const Component = Icon[icon];
</script>

<Component class={className} aria-hidden />
