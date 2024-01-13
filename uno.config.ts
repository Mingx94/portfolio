import extractorSvelte from '@unocss/extractor-svelte';
import presetUno from '@unocss/preset-uno';
import { defineConfig, transformerVariantGroup, presetTypography } from 'unocss';

export default defineConfig({
	extractors: [extractorSvelte()],
	shortcuts: [],
	presets: [presetUno(), presetTypography()],
  transformers: [
    transformerVariantGroup(),
  ],
});
