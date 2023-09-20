<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode, A } from 'flowbite-svelte';
	import { PUBLIC_GITHUB, PUBLIC_LINKEDIN } from '$env/static/public';

	// let btnClass =
	// 'text-gray-500 dark:text-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 dark:hover:bg-gray-900 rounded-lg text-xl p-2';

	let btnClass =
		'px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none hover:border dark:text-white dark:hover:shadow-[4px_4px_0px_gray]';

	function handleScrollTo(event: MouseEvent): void {
		event.preventDefault();
		let section_name: string = 'experience';
		let elToView = document.getElementById(section_name);

		elToView?.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<Navbar
	let:hidden
	let:toggle
	color="blue"
	fluid
	navClass="py-2.5 mb-8 dark:bg-gray-700"
	navDivClass="flex flex-wrap justify-between items-center max-w-5xl mx-auto md:justify-normal"
>
	<NavBrand href="/">
		<span class="px-2 text-xl font-semibold dark:text-white lg:mr-4 lg:px-0">PW</span>
	</NavBrand>
	<div class="flex items-center gap-6 md:order-2 md:px-4">
		<A
			href={PUBLIC_GITHUB}
			class={btnClass}
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
			</svg>
		</A>
		<A
			href={PUBLIC_LINKEDIN}
			class={btnClass}
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
		</A>
		<DarkMode {btnClass} />
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl {hidden} divClass="w-full md:block md:w-auto md:flex-1">
		<NavLi href="/" active={$page.route.id === '/'}>Home</NavLi>
		<NavLi href="#experience" active={$page.route.id === '#experience'} on:click={handleScrollTo}
			>Experience</NavLi
		>
		<NavLi on:click>Contact</NavLi>
	</NavUl>
</Navbar>
