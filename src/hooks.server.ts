import { css } from '$lib/assets/jf-openhuninn-2.1.ttf?subsets';
import { COOKIE_THEME } from '$lib/site/config';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { cookies } = event;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				.replace(
					'%font-subset%',
					`<style>body { font-family: "${css.family}"; font-weight: ${css.weight}; font-style: ${css.style}; }</style>`
				)
				.replace('%cookie-theme%', cookies.get(COOKIE_THEME) || 'light')
	});

	return response;
};
