export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	excerpt: string;
	coverImage: string;
	coverWidth: number;
	coverHeight: number;
	date: string;
	categories: string[];
};
