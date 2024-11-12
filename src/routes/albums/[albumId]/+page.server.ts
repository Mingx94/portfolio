import { FLICKR_USER_ID } from '$env/static/private';
import FlickrApi from '$lib/api/flickr';
import type { ClientPhoto } from '$lib/types/photo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { albumId } = params;
	const [album, albumInfo] = await Promise.all([
		FlickrApi.getPhotos(albumId),
		FlickrApi.getAlbumInfo(albumId, FLICKR_USER_ID)
	]);

	const images: ClientPhoto[] = album.photoset.photo.map((photo) => {
		return {
			src: photo.url_o,
			width: photo.width_o,
			height: photo.height_o,
			alt: photo.title,
			photoId: photo.id,
			thumbnail: {
				src: photo.url_w,
				width: photo.width_w,
				height: photo.height_w
			}
		};
	});

	return {
		album,
		albumInfo,
		images
	};
};
