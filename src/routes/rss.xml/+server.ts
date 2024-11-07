import * as config from '$lib/site/config';
import type { Post } from '$lib/types/index.js';
import { fetchJSON } from '$lib/utils/index.js';

const escapeMap = new Map([
	['<', '&lt;'],
	['>', '&gt;'],
	['&', '&amp;'],
	['"', '&quot;'],
	["'", '&apos;']
]);

const escapeXml = (unsafe: string) => unsafe.replace(/[<>&'"]/g, (match) => escapeMap.get(match));

export async function GET({ fetch }) {
	const posts = await fetchJSON<Post[]>('/api/posts', fetch);

	const headers = { 'Content-Type': 'application/xml' };
	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${escapeXml(config.siteTitle)}</title>
				<description>${escapeXml(config.siteDescription)}</description>
				<link>${config.siteUrl}/blog</link>
				<follow_challenge>
					<feedId>72215661807600640</feedId>
					<userId>41289469655933952</userId>
				</follow_challenge>
				<atom:link href="${config.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
					<item>
						<title>${escapeXml(post.title)}</title>
						<description>${escapeXml(post.description)}</description>
						<link>${config.siteUrl}/blog/${post.slug}</link>
						<guid>${config.siteUrl}/blog/${post.slug}</guid>
						<pubDate>${new Date(post.published).toUTCString()}</pubDate>
					</item>
				`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
