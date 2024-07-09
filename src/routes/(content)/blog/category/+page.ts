import type { Post } from '$lib/types/post';

export const load = async ({ fetch }) => {
	const res = await fetch('/api/posts.json');
	const posts = (await res.json()) as Post[];

	const uniqueCategories: Record<string, { title: string; count: number }> = {};

	posts.forEach((post) => {
		post.categories.forEach((category) => {
			if (uniqueCategories.hasOwnProperty(category)) {
				uniqueCategories[category].count += 1;
			} else {
				uniqueCategories[category] = {
					title: category,
					count: 1
				};
			}
		});
	});

	const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) =>
		a.title.localeCompare(b.title)
	);

	return {
		uniqueCategories: sortedUniqueCategories
	};
};
