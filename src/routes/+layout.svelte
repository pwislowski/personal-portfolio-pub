<script lang="ts">
	import '../app.postcss';
	import Contact from '$lib/components/layout/Contact.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	import PageProgress from '$lib/components/layout/PageProgress.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let hiddenContact = true;
	let showFooter: boolean = false;

	function handleClick() {
		hiddenContact = false;
	}

	setTimeout(async () => {
		showFooter = true;
	}, 1000);

	function toggleOverflow(trigger: boolean): void {
		try {
			let body = document.body;
			if (trigger) {
				body.style.overflow = 'auto';
			} else {
				body.style.overflow = 'hidden';
			}
		} catch {}
	}

	$: toggleOverflow(hiddenContact);
</script>

<PageProgress />
<Nav on:click={handleClick} />
<Contact bind:hidden3={hiddenContact} />

<slot />

{#if showFooter}
	<Footer on:click={handleClick} />
{/if}
