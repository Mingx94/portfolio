import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindAnimated from 'tailwindcss-animated';

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			textColor: {
				main: withOpacity('--color-text'),
				accent: withOpacity('--color-text-accent')
			},
			backgroundColor: {
				main: withOpacity('--color-bg'),
				card: withOpacity('--color-bg-card'),
				accent: withOpacity('--color-bg-accent')
			},
			fontFamily: {
				sans: ['"jf-openhuninn-2.1"', ...fontFamily.sans],
				mono: ['"JetBrains Mono"', 'monospace']
			},

			typography: {
				DEFAULT: {
					css: {
						pre: {
							color: false
						},
						code: {
							color: false
						}
					}
				}
			}
		}
	},
	plugins: [
		iconsPlugin({
			// Select the icon collections you want to use
			// You can also ignore this option to automatically discover all individual icon packages you have installed
			// If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
			collections: getIconCollections(['iconoir'])
			// If you want to use all icons from @iconify/json, you can do this:
			// collections: getIconCollections("all"),
			// and the more recommended way is to use `dynamicIconsPlugin`, see below.
		}),
		tailwindAnimated
	]
};
