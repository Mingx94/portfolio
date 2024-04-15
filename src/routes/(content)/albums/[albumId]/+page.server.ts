import { FLICKR_USER_ID } from '$env/static/private';
import FlickrApi from '$lib/api/flickr';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { albumId } = params;
	const [album, albumInfo] = await Promise.all([
		FlickrApi.getPhotos(albumId),
		FlickrApi.getAlbumInfo(albumId, FLICKR_USER_ID)
	]);

	return { album, albumInfo };
};
