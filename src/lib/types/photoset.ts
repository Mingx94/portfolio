export interface Photoset {
	id: string;
	owner: string;
	username: string;
	primary: string;
	secret: string;
	server: string;
	farm: number;
	count_views: string;
	count_comments: string;
	count_photos: number;
	count_videos: number;
	title: Description;
	description: Description;
	can_comment: number;
	date_create: string;
	date_update: string;
	photos: number;
	videos: number;
	visibility_can_see_set: number;
	needs_interstitial: number;
	primary_photo_extras: PrimaryPhotoExtras;
}

export interface Description {
	_content: string;
}

export interface PrimaryPhotoExtras {
	license: string;
	dateupload: string;
	lastupdate: string;
	datetaken: Date;
	datetakengranularity: number;
	datetakenunknown: string;
	ownername: string;
	iconserver: string;
	iconfarm: number;
	views: string;
	tags: string;
	machine_tags: string;
	originalsecret: string;
	originalformat: string;
	latitude: number;
	longitude: number;
	accuracy: number;
	context: number;
	media: string;
	media_status: string;
	// url_sq: string;
	// height_sq: number;
	// width_sq: number;
	url_t: string;
	height_t: number;
	width_t: number;
	// url_s: string;
	// height_s: number;
	// width_s: number;
	url_m: string;
	height_m: number;
	width_m: number;
	url_o: string;
	height_o: number;
	width_o: number;
	pathalias: null;
	url_w: string;
	height_w: number;
	width_w: number;
}
