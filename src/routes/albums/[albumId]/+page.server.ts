import FlickrApi from '$lib/api/flickr';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { albumId } = params;
	const album = await FlickrApi.getPhotos(albumId);
	return { album };
};
