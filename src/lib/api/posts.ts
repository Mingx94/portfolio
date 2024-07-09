import { postsPerPage } from '$lib/config';
import type { Post } from '$lib/types/post';

const fetchAllPosts = () => {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').pop()?.slice(0, -3);

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			posts.push({ ...metadata, slug });
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return { posts };
};

export const fetchPosts = ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
	let { posts } = fetchAllPosts();

	if (category) {
		posts = posts.filter((post) => post.categories.includes(category));
	}

	if (offset) {
		posts = posts.slice(offset);
	}

	if (limit && limit < posts.length && limit != -1) {
		posts = posts.slice(0, limit);
	}

	posts = posts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		coverWidth: post.coverWidth,
		coverHeight: post.coverHeight,
		date: post.date,
		categories: post.categories
	}));

	return { posts };
};
