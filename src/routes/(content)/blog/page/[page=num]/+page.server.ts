export async function load({ fetch, params }) {
	const page = +params.page || 1;
	const postRes = await fetch(`/api/posts/page/${page}`);
	const posts = await postRes.json();

	const totalRes = await fetch('/api/posts/count');
	const total = await totalRes.json();

	return { posts, total, page };
}
