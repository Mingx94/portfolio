import extractorSvelte from '@unocss/extractor-svelte';
import {
	defineConfig,
	transformerVariantGroup,
	presetTypography,
	presetUno,
	transformerDirectives,
	presetIcons
} from 'unocss';

function withOpacity(variableName) {
	return `rgba(var(${variableName}), <alpha-value>)`;
}

export default defineConfig({
	content: {
		filesystem: ['src/app.html']
	},
	shortcuts: [
		[
			/^sq-(.*)$/,
			([, c]) => {
				return `w-${c} h-${c}`;
			}
		]
	],
	variants: [
		// prose-*:
		(matcher) => {
			if (!matcher.startsWith('prose-')) {
				return matcher;
			}

			const separator = matcher.indexOf(':');
			if (separator === -1) {
				return matcher;
			}
			console.log({ matcher, separator });
			const prefix = matcher.slice(0, separator);
			const children = prefix.slice(6);
			console.log({ prefix, children });

			return {
				// slice `hover:` prefix and passed to the next variants and rules
				matcher: prefix,
				selector: () => `.prose ${children}`
			};
		}
	],
	extractors: [extractorSvelte()],
	presets: [presetUno(), presetTypography(), presetIcons({ cdn: 'https://esm.sh/' })],
	transformers: [transformerVariantGroup(), transformerDirectives()],
	theme: {
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
});
