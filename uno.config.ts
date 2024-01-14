import extractorSvelte from '@unocss/extractor-svelte';
import {
	defineConfig,
	transformerVariantGroup,
	presetTypography,
	presetUno,
	transformerDirectives,
	presetIcons
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
	presets: [
		presetUno(),
		presetTypography(),
		presetIcons({
			cdn: 'https://esm.sh/'
		})
	],
	transformers: [transformerVariantGroup(), transformerDirectives()]
});
