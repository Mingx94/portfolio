import { categories } from '$lib/site/config';
import { getPostsByCategory } from '$lib/site/posts';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const category = params.category;

	if (!categories.includes(category)) {
		error(404, 'Category does not exist');
	}

	try {
		return { posts: await getPostsByCategory(category) };
	} catch (e) {
		error(404, (e as Error).message);
	}
}
