<script lang="ts">
	import { Button } from 'flowbite-svelte';

	function handleClick(e: MouseEvent) {
		e.preventDefault();

		const footerBtn = document.getElementById('footerContactBtn');
		footerBtn?.click();
	}
</script>

<Button
	color="primary"
	size="xl"
	class="font-semibold uppercase transition-all duration-300"
	on:click={handleClick}
>
	Reach out
</Button>
