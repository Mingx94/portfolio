import { fetchPosts } from '$lib/api/posts';
import * as config from '$lib/config';

const escapeMap = new Map([
	['<', '&lt;'],
	['>', '&gt;'],
	['&', '&amp;'],
	['"', '&quot;'],
	["'", '&apos;']
]);

const escapeXml = (unsafe: string) => unsafe.replace(/[<>&'"]/g, (match) => escapeMap.get(match));

export async function GET() {
	const { posts } = fetchPosts({ limit: -1 });

	const headers = { 'Content-Type': 'application/xml' };
	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${escapeXml(config.siteTitle)}</title>
				<description>${escapeXml(config.siteDescription)}</description>
				<link>${config.siteUrl}/blog</link>
				<atom:link href="${config.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
					<item>
						<title>${escapeXml(post.title)}</title>
						<description>${escapeXml(post.excerpt)}</description>
						<link>${config.siteUrl}/blog/${post.slug}</link>
						<guid>${config.siteUrl}/blog/${post.slug}</guid>
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
