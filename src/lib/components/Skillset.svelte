<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';
	import { fade, slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { images } from '$lib/images';

	let mounted = false;
	export let gridClass: string = 'grid gap-2 grid-cols-4 max-w-md items-center';

	let clazz: string = '';
	export { clazz as class };

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class={clazz}>
		<div class={gridClass}>
			{#each images as img, index}
				<img
					src={img.src}
					alt={img.alt}
					in:fade|global={{ duration: index * 300, delay: 700, easing: cubicInOut }}
				/>
				<Tooltip arrow={false} transition={slide}
					>{img.alt[0].toUpperCase() + img.alt.slice(1)}</Tooltip
				>
			{/each}
		</div>
	</div>
{/if}
