import FlickrApi from '$lib/api/flickr';
import { json, type RequestHandler, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const photoId = url.searchParams.get('photoId');
	if (!photoId) {
		throw error(400, 'Missing photoId');
	}

	const photo = await FlickrApi.getPhotoExif(photoId);

	return json(photo);
};
