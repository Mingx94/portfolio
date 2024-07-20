<script lang="ts">
	import '../styles.css';
  import { setColorSchemeContext } from '$lib/contexts/theme';
	
  export let data;

  setColorSchemeContext(data.colorSchema);
</script>

<slot />
