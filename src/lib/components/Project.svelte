<script lang="ts">
	import { Card, Tooltip } from 'flowbite-svelte';
	import { images } from '$lib/images';
	import { slide } from 'svelte/transition';

	export let title: string;
	export let description: string;
	export let technology: string[];
	export let url: string;

	let techStack = images.filter((i) => technology.includes(i.alt));

	const styling =
		'px-6 py-2 font-medium text-white w-fit transition-all hover:shadow-[4px_4px_0px] hover:shadow-primary-600 hover:dark:shadow-[4px_4px_0px_gray] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:bg-gray-50';
</script>

<!-- class="hover:cursor-pointer mx-auto justify-between h-[300px]" -->

<Card
	on:click={() => {
		window.open(url, '_blank')?.focus();
	}}
	class={styling}
	padding="xl"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	<p class="mb-4 flex-1 font-normal leading-tight text-gray-700 dark:text-gray-400">
		{@html description}
	</p>
	<div class="flex flex-wrap place-items-start gap-2">
		{#each techStack as tech}
			<img src={tech.src} alt={tech.alt} class="h-10 w-10" />
			<Tooltip arrow={false} placement="bottom" transition={slide}
				>{tech.alt[0].toUpperCase() + tech.alt.slice(1)}</Tooltip
			>
		{/each}
	</div>
</Card>
