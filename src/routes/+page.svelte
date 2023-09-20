<script lang="ts">
	// Analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import Introduction from '$lib/components/Introduction.svelte';
	import Skillset from '$lib/components/Skillset.svelte';
	import Project from '$lib/components/Project.svelte';
	import Timeline from '$lib/components/resume/Timeline.svelte';
	import ExperienceDesc from '$lib/components/resume/ExperienceDesc.svelte';
	import ReachOutBtn from '$lib/components/ReachOutBtn.svelte';
	import { Heading, Secondary, P } from 'flowbite-svelte';

	import { projects } from '$lib/projects';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	let mounted = false;

	onMount(async () => {
		setTimeout(() => {
			mounted = true;
		}, 700);
	});

	inject({ mode: dev ? 'development' : 'production' });

	let headerStylingFont: string = 'text-5xl font-extrabold';
	let sectionStyling: string = 'flex flex-col gap-8 my-10 max-w-5xl mx-auto px-2 lg:px-0';
</script>

<section id="intro" class={sectionStyling}>
	<Introduction />
	<Skillset class="flex justify-center" />
</section>

{#if mounted}
	<section id="projects" class={sectionStyling} transition:blur>
		<Heading tag="h1" customSize={headerStylingFont} class="w-fit"
			>Projects<Secondary class="ml-4">for self-development & expertise</Secondary></Heading
		>
		<div class="grid grid-cols-1 gap-2 self-center sm:grid-cols-2">
			{#each projects as p}
				<Project {...p} />
			{/each}
		</div>
	</section>
	<section id="experience" class={sectionStyling}>
		<Heading tag="h1" customSize={headerStylingFont} class="w-fit">Experience</Heading>
		<ExperienceDesc />
		<Timeline />
	</section>
	<div class="my-8 flex justify-center">
		<ReachOutBtn />
	</div>
{/if}
