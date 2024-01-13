import { FLICKR_API_KEY } from '$env/static/private';
import type { Photo, PhotoInfo } from '$lib/types/photo';
import type { PhotoExif } from '$lib/types/photo-exif';
import type { Photoset } from '$lib/types/photoset';

const baseUrl = 'https://api.flickr.com/services/rest/';

export const extras = [
	'license',
	'date_upload',
	'date_taken',
	'owner_name',
	'icon_server',
	'original_format',
	'last_update',
	'geo',
	'tags',
	'machine_tags',
	'o_dims',
	'views',
	'media',
	// 'path_alias',
	// 'url_sq',
	// 'url_t',
	// 'url_s',
	'url_m',
	'url_o',
	'url_w'
].join(',');

const getAlbums = async (userId: string) => {
	const url = new URL(baseUrl);
	url.searchParams.append('method', 'flickr.photosets.getList');
	url.searchParams.append('api_key', FLICKR_API_KEY);
	url.searchParams.append('user_id', userId);
	url.searchParams.append('format', 'json');
	url.searchParams.append('nojsoncallback', '1');
	url.searchParams.append('primary_photo_extras', extras);

	const response = await fetch(url);
	const data = await response.json();

	return data as {
		photosets: {
			page: number;
			pages: number;
			perpage: number;
			total: number;
			photoset: Photoset[];
		};
		stat: string;
	};
};

const getAlbumInfo = async (albumId: string, userId: string) => {
	const url = new URL(baseUrl);
	url.searchParams.append('method', 'flickr.photosets.getInfo');
	url.searchParams.append('api_key', FLICKR_API_KEY);
	url.searchParams.append('photoset_id', albumId);
	url.searchParams.append('user_id', userId);
	url.searchParams.append('format', 'json');
	url.searchParams.append('nojsoncallback', '1');

	const response = await fetch(url);
	const data = await response.json();

	return data as {
		photoset: Photoset;
		stat: string;
	};
};

const getPhotos = async (photosetId: string) => {
	const url = new URL(baseUrl);
	url.searchParams.append('method', 'flickr.photosets.getPhotos');
	url.searchParams.append('api_key', FLICKR_API_KEY);
	url.searchParams.append('photoset_id', photosetId);
	url.searchParams.append('format', 'json');
	url.searchParams.append('nojsoncallback', '1');
	url.searchParams.append('extras', extras);

	const response = await fetch(url);
	const data = await response.json();

	return data as {
		photoset: {
			id: string;
			primary: string;
			owner: string;
			ownername: string;
			photo: Photo[];
			page: number;
			per_page: number;
			perpage: number;
			pages: number;
			title: string;
			total: number;
		};
	};
};

const getPhotoInfo = async (photoId: string) => {
	const url = new URL(baseUrl);
	url.searchParams.append('method', 'flickr.photos.getInfo');
	url.searchParams.append('api_key', FLICKR_API_KEY);
	url.searchParams.append('photo_id', photoId);
	url.searchParams.append('format', 'json');
	url.searchParams.append('nojsoncallback', '1');

	const response = await fetch(url);
	const data = await response.json();

	return data as {
		photo: PhotoInfo;
		stat: string;
	};
};

const getPhotoExif = async (photoId: string) => {
	const url = new URL(baseUrl);
	url.searchParams.append('method', 'flickr.photos.getExif');
	url.searchParams.append('api_key', FLICKR_API_KEY);
	url.searchParams.append('photo_id', photoId);
	url.searchParams.append('format', 'json');
	url.searchParams.append('nojsoncallback', '1');

	const response = await fetch(url);
	const data = await response.json();

	return data as {
		photo: PhotoExif;
		stat: string;
	};
};

const FlickrApi = {
	getAlbums,
	getAlbumInfo,
	getPhotos,
	getPhotoInfo,
	getPhotoExif
};

export default FlickrApi;
