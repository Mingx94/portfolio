import { json } from '@sveltejs/kit';

export const GET = () => {
	const posts = import.meta.glob(`/src/posts/*.md`);

	return json(Object.keys(posts).length);
};
