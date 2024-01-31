import { FLICKR_USER_ID } from '$env/static/private';
import FlickrApi from '$lib/api/flickr.js';
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
	const { photosets } = await FlickrApi.getAlbums(FLICKR_USER_ID);
	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${escapeXml("Michael Tsai's Photos")}</title>
				<description>攝影集</description>
				<link>${config.url}/albums</link>
				<atom:link href="${config.url}/albums/rss.xml" rel="self" type="application/rss+xml"/>
				${photosets.photoset
					.map(
						(album) => `
						<item>
							<title>${escapeXml(album.title._content)}</title>
							<description>${escapeXml(album.description._content)}</description>
							<link>${config.url}/albums/${album.id}</link>
							<guid isPermaLink="true">${config.url}/albums/${album.id}</guid>
							<pubDate>${new Date(+album.date_create).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}

			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
