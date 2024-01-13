import extractorSvelte from '@unocss/extractor-svelte';
import {
	defineConfig,
	transformerVariantGroup,
	presetTypography,
	presetUno,
	transformerDirectives
} from 'unocss';

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
	extractors: [extractorSvelte()],
	presets: [presetUno(), presetTypography()],
	transformers: [transformerVariantGroup(), transformerDirectives()]
});
