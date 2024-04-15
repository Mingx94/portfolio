import { dev } from '$app/environment';

export const title = 'Vartifact';

export const description = '程式筆記 & 攝影部落格';

export const url = dev ? 'http://localhost:5173' : 'https://vartifact.cc';

export const socialLinks = [
	{
		name: 'Github',
		url: 'https://github.com/Mingx94/photo-gallery',
		icon: 'i-iconoir-github'
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/michael.tsai_94/',
		icon: 'i-iconoir-instagram'
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/ming-xuan-tsai-821157171/',
		icon: 'i-iconoir-linkedin'
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: 'i-iconoir-rss-feed'
	}
];
