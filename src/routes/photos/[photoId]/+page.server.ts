import FlickrApi from '$lib/api/flickr';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { photoId } = params;

	const [photoInfo, photoExif] = await Promise.all([
		FlickrApi.getPhotoInfo(photoId),
		FlickrApi.getPhotoExif(photoId)
	]);

	console.log(photoInfo, photoExif);

	return {
		photoInfo,
		photoExif
	};
};
