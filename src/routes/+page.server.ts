import FlickrApi from '$lib/api/flickr';
import { FLICKR_USER_ID } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { photosets } = await FlickrApi.getPhotosets(FLICKR_USER_ID);
	return { photosets };
};
