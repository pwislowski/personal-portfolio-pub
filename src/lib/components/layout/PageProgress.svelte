<script lang="ts">
	import { Progressbar } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let progress: string = '0';
	function handleScroll() {
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const scrollTop = window.scrollY;
		const maxScroll = documentHeight - windowHeight;

		const temp = (scrollTop / maxScroll) * 100;

		progress = String(Math.floor(temp));
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<Progressbar bind:progress size="h-1" divClass="sticky top-0" />
