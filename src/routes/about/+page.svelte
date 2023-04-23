<script>
	import me from '$lib/assets/me.jpg';

	let title = '關於我 | Coding Shutter';
	let description = 'Michael Tsai, 前端工程師 | Coding Shutter';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Michael Tsai" />

	<!-- Facebook Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://coding-shutter.blog/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={me} />
	<meta property="og:width" content="300" />
	<meta property="og:height" content="300" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article>
	<h1>關於我</h1>

	<div class="avatar">
		<img class="image-cropped-transform" src={me} alt="Michael Tsai" />
	</div>

	<p>
		我是 Michael Tsai 前端工程師，喜好攝影和公路車。 目前使用的相機是 Sony A7C， 使用的鏡頭為 Sony
		FE 50mm F2.5 G 和 Tamron 28-200mm F2.8-5.6。 歡迎各位一起交流。
	</p>
</article>

<style>
	.avatar {
		position: relative;
		width: 300px;
		aspect-ratio: 1/1;
		border-radius: 999px;
		overflow: hidden;
		/* fix safari overflow */
		isolation: isolate;

		margin: 0 auto;
	}
	.image-cropped-transform {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		left: 0;
		object-position: 55%;
		transform: scale(1.5);
	}
	article {
		max-width: 600px;
		margin: 0 auto;
		padding: 1rem;
		text-align: center;
	}
	p {
		line-height: 1.6;
		margin: 1rem auto;
		max-width: 400px;
		text-align: left;
	}
</style>
