import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import { fontFamily } from 'tailwindcss/defaultTheme';

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
	theme: {
		// Remove the following screen breakpoint or add other breakpoints
		// if one breakpoint is not enough for you
		screens: {
			sm: '640px'
		},
		fontFamily: {
			serif: ["'Noto Serif TC'", ...fontFamily.serif]
		},
		extend: {
			textColor: {
				skin: {
					base: withOpacity('--color-text-base'),
					accent: withOpacity('--color-accent'),
					inverted: withOpacity('--color-fill')
				}
			},
			backgroundColor: {
				skin: {
					fill: withOpacity('--color-fill'),
					accent: withOpacity('--color-accent'),
					inverted: withOpacity('--color-text-base'),
					card: withOpacity('--color-card'),
					'card-muted': withOpacity('--color-card-muted')
				}
			},
			outlineColor: {
				skin: {
					fill: withOpacity('--color-accent')
				}
			},
			borderColor: {
				skin: {
					line: withOpacity('--color-border'),
					fill: withOpacity('--color-text-base'),
					accent: withOpacity('--color-accent')
				}
			},
			fill: {
				skin: {
					base: withOpacity('--color-text-base'),
					accent: withOpacity('--color-accent')
				},
				transparent: 'transparent'
			},
			fontFamily: {
				mono: ['IBM Plex Mono', 'monospace']
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
		require('@tailwindcss/typography'),
		iconsPlugin({
			// Select the icon collections you want to use
			// You can also ignore this option to automatically discover all individual icon packages you have installed
			// If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
			collections: getIconCollections(['iconoir'])
			// If you want to use all icons from @iconify/json, you can do this:
			// collections: getIconCollections("all"),
			// and the more recommended way is to use `dynamicIconsPlugin`, see below.
		}),
		require('tailwindcss-animated')
	]
};
