<script lang="ts">
	import '../styles.css';
	import { setColorSchemeContext } from '$lib/contexts/theme';

	interface Props {
		data: any;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	setColorSchemeContext(data.colorSchema);
</script>

{@render children?.()}
