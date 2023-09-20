<script lang="ts">
	import {
		Drawer,
		Button,
		CloseButton,
		Label,
		Input,
		Textarea,
		P,
		A,
		Spinner
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import { fly, blur } from 'svelte/transition';
	import { PUBLIC_GITHUB, PUBLIC_LINKEDIN } from '$env/static/public';

	export let hidden3: boolean;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	let isSending: boolean = false;
	let disabled: boolean = false;

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function handleSumbit(e: Event) {
		const formData = new FormData(e.target as HTMLFormElement);

		interface FormDataItem {
			[key: string]: FormDataEntryValue;
		}

		const data: FormDataItem = {};

		for (let f of formData.entries()) {
			const [k, v] = f;
			data[k] = v;
		}

		let res = fetch('/api/sendmail', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		isSending = true;
		await sleep(1000);
		isSending = false;

		disabled = true;
	}
</script>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden3} id="sidebar3">
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="mb-6 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
		>
			<svg
				class="mr-2 h-5 w-5"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
					clip-rule="evenodd"
				/></svg
			>Contact me
		</h5>
		<CloseButton
			on:click={() => (hidden3 = true)}
			class="mb-4 transition-all duration-300 dark:text-white"
		/>
	</div>
	<form class="mb-6" on:submit|preventDefault={handleSumbit}>
		<div class="mb-6">
			<Label for="email" class="mb-2 block">Your email</Label>
			<Input
				id="email"
				name="email"
				required
				placeholder="name@company.com"
				pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
				{disabled}
			/>
		</div>
		<div class="mb-6">
			<Label for="subject" class="mb-2 block">Subject</Label>
			<Input
				id="subject"
				name="subject"
				required
				placeholder="Let me know how I can help you"
				{disabled}
			/>
		</div>
		<div class="mb-6">
			<Label for="message" class="mb-2">Your message</Label>
			<Textarea
				id="message"
				placeholder="Your message..."
				rows="10"
				name="message"
				required
				{disabled}
			/>
		</div>
		{#if isSending}
			<div transition:blur>
				<Button class="w-full"><Spinner color="green" class="mr-3" />Sending...</Button>
			</div>
		{:else if disabled}
			<div transition:fly>
				<Button class="w-full" pill outline>Message sent!</Button>
			</div>
		{:else}
			<div>
				<Button type="submit" class="w-full transition-all duration-300">Send message</Button>
			</div>
		{/if}
	</form>
	<P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
		<A
			href="mailto:pwislowski@hotmail.com"
			class="flex inline-flex w-full items-baseline gap-2 text-primary-600 hover:underline dark:text-primary-500"
		>
			<svg
				class="h-6 w-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
				/>
			</svg>
			pwislowski@hotmail.com
		</A>
	</P>
	<P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
		<A
			href={PUBLIC_GITHUB}
			class="flex inline-flex w-full items-baseline gap-2 text-primary-600 hover:underline dark:text-primary-500"
			on:click={(e) => {
				e.preventDefault();
				window.open(PUBLIC_GITHUB, '_blank')?.focus();
			}}
		>
			<svg
				class="h-6 w-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					fill-rule="evenodd"
					d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
					clip-rule="evenodd"
				/>
			</svg>GitHub
			<svg
				class="h-4 w-4 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
				/>
			</svg>
		</A>
	</P>
	<P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
		<A
			href={PUBLIC_LINKEDIN}
			class="flex inline-flex w-full items-baseline gap-2 text-primary-600 hover:underline dark:text-primary-500"
			on:click={(e) => {
				e.preventDefault();
				window.open(PUBLIC_LINKEDIN, '_blank')?.focus();
			}}
		>
			<svg
				class="h-6 w-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 15 15"
			>
				<path
					fill-rule="evenodd"
					d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
					clip-rule="evenodd"
				/>
				<path d="M3 5.012H0V15h3V5.012Z" />
			</svg>
			LinkedIn
			<svg
				class="h-4 w-4 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
				/>
			</svg>
		</A>
	</P>
</Drawer>
