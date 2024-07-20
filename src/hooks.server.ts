import {} from '$env/static/public';
import { COOKIE_THEME } from '$lib/config';

/** @type {import('@sveltejs/kit).Handle} */
export const handle = async ({ event, resolve }) => {
	const { locals, cookies } = event;

	locals.colorSchema = (cookies.get(COOKIE_THEME) as App.ColorSchema) || 'system';

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%cookie-theme%', event.locals.colorSchema)
	});

	return response;
};
