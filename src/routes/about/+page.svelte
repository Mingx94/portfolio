<script>
	let title = '關於我 | Coding Shutter';
	let description = '關於我 | Coding Shutter';
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
</svelte:head>

<section class="max-w-800px mx-auto px-20px md:px-40px py-40px md:py-80px">
	<article>
		<div>
			<h1 class="text-center text-24px font-600 mb-20px">關於我</h1>

			<p class="md:text-center text-18px line-height-30px">
				我是 Michael Tsai，本業前端工程師，業餘攝影愛好者。
				<br />
				<br />目前使用的相機為 Sony <b>α7C</b>。 較常拍風景，人像攝影還在摸索中。
			</p>
		</div>
	</article>
</section>
