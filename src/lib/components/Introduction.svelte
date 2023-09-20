<script lang="ts">
	import { Heading, Secondary } from 'flowbite-svelte';
	import Typewriter from 'svelte-typewriter';

	let headerDone: boolean = false;
</script>

<div>
	<Typewriter
		on:done={() => {
			headerDone = true;
		}}
	>
		<Heading tag="h1" customSize="text-5xl font-extrabold">Piotr Wislowski</Heading>
	</Typewriter>
	{#if headerDone}
		<Typewriter keepCursorOnFinish={2000}>
			<Heading>
				<Secondary>FinTech with heart.</Secondary>
			</Heading>
		</Typewriter>
	{/if}
</div>
