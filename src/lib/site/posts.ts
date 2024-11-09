import type { Post } from '$lib/types';

async function parseMarkdownFiles() {
	try {
		const posts: Post[] = [];
		const paths = import.meta.glob('/posts/**/*.md', { eager: true });

		for (const path in paths) {
			const file = paths[path];
			const slug = path.split('/').pop()?.slice(0, -3);

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<Post, 'slug'>;
				posts.push({ ...metadata, slug });
			}
		}

		// for (const folder of folders) {
		// 	const markdownFilePath = path.join(postsPath, folder, `${folder}.md`);
		// 	const markdownContent = await fs.readFile(markdownFilePath, 'utf-8');
		// 	const { data } = matter(markdownContent);
		// 	posts.push({
		// 		...data,
		// 		slug: folder
		// 	} as Post);
		// }

		return posts;
	} catch (e) {
		throw new Error('Could not parse Markdown files');
	}
}

function getTime(date: string) {
	return new Date(date).getTime();
}

export async function getPosts() {
	let posts = await parseMarkdownFiles();
	posts = posts.sort((first, second) => {
		return getTime(second.published) - getTime(first.published);
	});
	return posts;
}

export async function getPostsByCategory(category: string) {
	const posts = await getPosts();
	return posts.filter((post) => !post.draft && post.categories.includes(category));
}
