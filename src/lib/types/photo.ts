export interface PhotoInfo {
	id: string;
	secret: string;
	server: string;
	farm: number;
	dateuploaded: string;
	isfavorite: number;
	license: number;
	safety_level: number;
	rotation: number;
	originalsecret: string;
	originalformat: string;
	owner: Owner;
	title: Description;
	description: Description;
	visibility: Visibility;
	dates: Dates;
	views: number;
	editability: Editability;
	publiceditability: Editability;
	usage: Usage;
	comments: Comments;
	notes: Notes;
	people: People;
	tags: Tags;
	urls: Urls;
	media: string;
}

export interface Comments {
	_content: number;
}

export interface Dates {
	posted: string;
	taken: Date;
	takengranularity: number;
	takenunknown: number;
	lastupdate: string;
}

export interface Description {
	_content: string;
}

export interface Editability {
	cancomment: number;
	canaddmeta: number;
}

export interface Notes {
	note: string[];
}

export interface Owner {
	nsid: string;
	username: string;
	realname: string;
	location: string;
	iconserver: number;
	iconfarm: number;
	path_alias: string;
	gift: Gift;
}

export interface Gift {
	gift_eligible: string;
	eligible_durations: string[];
	new_flow: string;
}

export interface People {
	haspeople: number;
}

export interface Tags {
	tag: Tag[];
}

export interface Tag {
	id: string;
	author: string;
	authorname: string;
	raw: string;
	_content: string;
	machine_tag: string;
}

export interface Urls {
	url: URL[];
}

export interface URL {
	type: string;
	_content: string;
}

export interface Usage {
	candownload: number;
	canblog: number;
	canprint: number;
	canshare: number;
}

export interface Visibility {
	ispublic: number;
	isfriend: number;
	isfamily: number;
}

export interface Photo {
	id: string;
	secret: string;
	server: string;
	farm: number;
	title: string;
	isprimary: string;
	ispublic: number;
	isfriend: number;
	isfamily: number;
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
	// pathalias: null;
	url_w: string;
	height_w: number;
	width_w: number;
}
