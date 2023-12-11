import { FLICKR_USER_ID } from '$env/static/private';
import FlickrApi from '$lib/api/flickr';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { photosets } = await FlickrApi.getAlbums(FLICKR_USER_ID);

	const photoset = photosets.photoset.filter((album) => {
		return (
			album.title._content !== 'A7C' &&
			album.title._content !== '50 2.5g' &&
			album.title._content !== 'A063'
		);
	});

	return {
		photosets: {
			...photosets,
			photoset,
		}
	};
};
