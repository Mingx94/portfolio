export type Post = {
	title: string;
	description: string;
	slug: string;
	published: string;
	updated: string;
	draft: boolean;
	categories: string;
	printYear?: boolean;
};

export type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];
