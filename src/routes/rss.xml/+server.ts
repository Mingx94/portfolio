import { FLICKR_USER_ID } from '$env/static/private';
import FlickrApi from '$lib/api/flickr.js';
import * as config from '$lib/config';
import type { Post } from '$lib/types/post';

export async function GET({ fetch }) {
	const [response, { photosets }] = await Promise.all([
		fetch('api/posts'),
		FlickrApi.getAlbums(FLICKR_USER_ID)
	]);
	const posts: Post[] = await response.json();
	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${photosets.photoset
					.map(
						(album) => `
						<item>
							<title>${album.title._content}</title>
							<description>${album.description._content}</description>
							<link>${config.url}/albums/${album.id}</link>
							<guid isPermaLink="true">${config.url}/albums/${album.id}</guid>
							<pubDate>${new Date(+album.date_create).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.url}/blog/${post.slug}</link>
							<guid isPermaLink="true">${config.url}/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}

			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
