import { getContext, setContext } from 'svelte';
import { derived, writable } from 'svelte/store';

import { browser } from '$app/environment';
import { COOKIE_THEME } from '$lib/config';

const COLOR_SCHEME_CONTEXT_ID = 'colorscheme';

/**
 * requires `window.matchMedia` (only in browser context)
 * @returns user's color scheme preference
 */
function getPrefersColorScheme() {
	if (!browser) return 'light';
	return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * @param {App.ColorSchema} initial
 */
function createColorSchemeStore(initial: App.ColorSchema) {
	const store = writable(initial);

	const preferred = derived(store, (c) => (c === 'system' ? getPrefersColorScheme() : c));

	return {
		subscribe: store.subscribe,
		/**
		 * @param {App.ColorSchema} scheme
		 */
		change(scheme: App.ColorSchema) {
			document.documentElement.dataset.theme = scheme;
			document.cookie = `${COOKIE_THEME}=${scheme}; path=/; SameSite=Lax; Secure`;
			store.set(scheme);
		},
		preferred
	};
}

/**
 * @param {App.ColorSchema} initial
 */
export function setColorSchemeContext(initial: App.ColorSchema) {
	return setContext(COLOR_SCHEME_CONTEXT_ID, createColorSchemeStore(initial));
}

/**
 * @returns {ReturnType<typeof createColorSchemeStore>}
 */
export function getColorSchemeContext(): ReturnType<typeof createColorSchemeStore> {
	return getContext(COLOR_SCHEME_CONTEXT_ID);
}
