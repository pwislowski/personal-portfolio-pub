<script lang="ts">
	import { P } from 'flowbite-svelte';

	export let clazz: string = 'w-full my-8';
	export { clazz as class };
</script>

<!-- 
	@component
	## Props
	@prop class: string = 'w-full my-8'
	
 -->

<div class={clazz}>
	<P height="normal" firstupper space="tight" size="lg"
		>Dynamic individual with a passion for both finance and technology. Coming from a strong finance
		background, I found myself struck by the transformative power of technology in shaping the
		financial landscape and working environment. My curiosity led me to take a leap into the world
		of development, and I have never looked back. Combining my financial expertise with my coding
		skills, I have gained unique insights into how technology can revolutionize both traditional
		finance and workspace and thus lead us into the future.
	</P>
</div>
