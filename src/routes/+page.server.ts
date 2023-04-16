import { FLICKR_USER_ID } from '$env/static/private';
import FlickrApi from '$lib/api/flickr';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { photosets } = await FlickrApi.getAlbums(FLICKR_USER_ID);
	return { photosets };
};
