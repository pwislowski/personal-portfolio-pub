<script lang="ts">
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<Footer class="max-w-5xl mx-auto">
	<FooterCopyright href="/" by="Piotr Wislowski" year={2023} copyrightMessage="" />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<li id="footerContactBtn" on:click class="hover:underline mr-4 last:mr-0 md:mr-6">Contact</li>
		<FooterLink href="/" target="_blank">Github Repo (TBA)</FooterLink>
	</FooterLinkGroup>
</Footer>
