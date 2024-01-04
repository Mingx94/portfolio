export interface GalleryItem {
	src: string;
	photoId: string;
	thumbnail?: {
		src: string;
		width: number;
		height: number;
	};
	width: number;
	height: number;
	cropped?: boolean;
	alt?: string;
}
