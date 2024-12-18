import tailwindAnimated from 'tailwindcss-animated';
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
	plugins: [tailwindAnimated]
};
