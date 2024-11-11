import { browser } from '$app/environment';

/**
 * requires `window.matchMedia` (only in browser context)
 * @returns user's color scheme preference
 */
function getPrefersColorScheme(): App.ColorSchema {
	if (!browser) return 'light';
	return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function listenMatchMedia(updater: (nextState: App.ColorSchema) => void) {
	if (!browser) return;

	const listener = (e: MediaQueryListEvent) => {
		const scheme = e.matches ? 'dark' : 'light';
		document.documentElement.dataset.theme = scheme;
		updater(scheme);
	};

	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	mediaQuery.addEventListener('change', listener);
}

export function createColorSchemeStore() {
	let store = $state(getPrefersColorScheme());

	const updater = (nextState: App.ColorSchema) => {
		store = nextState;
	};

	listenMatchMedia(updater);

	return {
		change(scheme: App.ColorSchema) {
			document.documentElement.dataset.theme = scheme;
			updater(scheme);
		},
		get preferred() {
			return store;
		}
	};
}

export const theme = createColorSchemeStore();
