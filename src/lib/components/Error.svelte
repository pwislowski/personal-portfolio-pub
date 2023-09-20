<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { Button } from 'flowbite-svelte';
	import Typewriter from 'svelte-typewriter';

	let error_msg: string;

	if ($page.status == 404) {
		error_msg = 'The page you are looking for does not exist...';
	} else if ($page.status === 500) {
		error_msg = 'Internal error.';
	} else {
		error_msg = $page.error?.message!;
	}

	let showBtn: boolean = false;
</script>

<div class="flex">
	<Typewriter
		on:done={() => {
			showBtn = true;
		}}
		mode="scramble"
	>
		<hgroup style="text-align: center;">
			<h1 class="status">{$page.status}</h1>
			<h2 class="message">{error_msg}</h2>
		</hgroup>
	</Typewriter>

	{#if showBtn}
		<div transition:fly>
			<Button href="/" class="align-middle">Go back Home</Button>
		</div>
	{/if}
</div>

<style>
	:root {
		--c: rgb(136, 48, 48);
	}

	div {
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.status {
		font-size: 10rem;
		font-family: monospace;
		font-weight: bolder;
		color: var(--c);
	}

	.message {
		font-size: 2rem;
		font-family: monospace;
		color: var(--c);
	}
</style>
