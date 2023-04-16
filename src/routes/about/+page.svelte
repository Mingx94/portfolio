<script>
	import me from '$lib/assets/me.jpg';
</script>

<svelte:head>
	<title>關於我</title>
	<meta name="description" content="About page" />
	<meta name="keywords" content="about, page" />
	<meta name="author" content="Michael Tsai" />
</svelte:head>

<article>
	<h1>關於我</h1>

	<div class="avatar">
		<img class="image-cropped-transform" src={me} alt="Michael Tsai" />
	</div>

	<p>
		我是 Michael Tsai, 是一名前端工程師
		<br /> 興趣是拍照跟公路車
		<br /> 歡迎來到我的網站
	</p>
</article>

<style>
	.avatar {
		position: relative;
		width: 100%;
		max-width: 300px;
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
</style>
