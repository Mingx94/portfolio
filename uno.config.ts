import extractorSvelte from '@unocss/extractor-svelte';
import { defineConfig, transformerVariantGroup, presetTypography, presetUno } from 'unocss';

export default defineConfig({
	extractors: [extractorSvelte()],
	shortcuts: [],
	presets: [presetUno(), presetTypography()],
  transformers: [
    transformerVariantGroup(),
  ],
});
