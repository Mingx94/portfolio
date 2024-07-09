import { fetchPosts } from '$lib/api/posts';
import { postsPerPage } from '$lib/config';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, fetch }) => {
	const page = +params.page || 1;
	const { category } = params;

	// Prevents duplication of page 1 as the index page
	if (page <= 1) {
		redirect(301, `/blog/category/${category}`);
	}

	const offset = page * postsPerPage - postsPerPage;

	const totalPostsRes = await fetch('/api/posts/count');
	const total = await totalPostsRes.json();
	const { posts } = await fetchPosts({ offset });

	return {
		posts,
		page,
		category,
		totalPosts: total
	};
};
