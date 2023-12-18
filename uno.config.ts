import extractorSvelte from '@unocss/extractor-svelte';
import presetUno from '@unocss/preset-uno';
import { defineConfig } from 'unocss';

export default defineConfig({
	extractors: [extractorSvelte()],
	shortcuts: [],
	presets: [presetUno()]
});
