import { dev } from '$app/environment';

export const siteName = 'Vartifact';

export const siteTitle = 'Vartifact';
export const siteDescription = '程式筆記 & 攝影部落格';
export const siteUrl = dev ? 'http://localhost:5173' : 'https://vartifact.cc';
export const ogUrl = dev ? 'http://localhost:8787' : 'https://og.vartifact.workers.dev';
export const twitterHandle = '@mingx94';
export const siteImage = `${siteUrl}/og.jpg`;

export const links = [
	{
		name: 'Github',
		url: 'https://github.com/Mingx94/photo-gallery',
		icon: 'github'
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/ming-xuan-tsai-821157171/',
		icon: 'linkedin'
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/michael.tsai_94/',
		icon: 'instagram'
	},
	{
		name: 'RSS Feed',
		url: '/rss.xml',
		icon: 'rss-feed'
	}
] as const;

export const albumLink = {
	name: '攝影作品',
	url: '/albums',
	icon: 'camera'
} as const;

export const categories = ['svelte'];

export const COOKIE_THEME = 'theme';
