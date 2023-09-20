<script lang="ts">
	import { Timeline, TimelineItem, Button, P } from 'flowbite-svelte';

	let btnClass =
		'px-6 py-3 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px] dark:hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none hover:border';
</script>

<Timeline>
	<TimelineItem title="Transfer Pricing Analyst" date="July 2023">
		<P class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Leading the transformation of Lonza's global transfer pricing strategies, optimizing
			intercompany transactions, and driving financial efficiencies. Additionally, ensuring seamless
			tax compliance on a global scale.
		</P>
		<Button
			href="https://www.lonza.com"
			color="alternative"
			class={btnClass}
			on:click={(e) => {
				e.preventDefault();
				window.open('https://www.lonza.com', '_blank')?.focus();
			}}
			>Lonza's Website<svg
				class="ml-2 h-3 w-3"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			></Button
		>
	</TimelineItem>
	<TimelineItem title="DEX Arbitrage Bot" date="April 2023">
		<P class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Trading Algorithm seeking exploitable market inefficiencies. Runs on a decentralized exchange
			- OpenBook.
		</P>
	</TimelineItem>
	<TimelineItem title="The Odin Project" date="March 2023">
		<P class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			This webpage serves as a tribute to the comprehensive online mega course I completed,
			encompassing both front- and back-end web development, which enabled me to gain extensive
			knowledge of web application functionalities.
		</P>
		<Button
			href="https://www.theodinproject.com"
			class={btnClass}
			color="alternative"
			on:click={(e) => {
				e.preventDefault();
				window.open('https://www.theodinproject.com', '_blank')?.focus();
			}}
			>Odin's Webiste<svg
				class="ml-2 h-3 w-3"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			></Button
		>
	</TimelineItem>
	<TimelineItem title="Commercial Finance Analyst" date="September 2022">
		<P class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Proficient in executing advanced SQL queries to extract valuable data insights and adept in
			data mining techniques. Utilized Python automation to enhance productivity. Developed a
			cutting-edge marketing SQL dataset, enabling unparalleled ROI tracking of marketing
			activities.
		</P>
		<Button
			href="https://www.radius.com"
			class={btnClass}
			color="alternative"
			on:click={(e) => {
				e.preventDefault();
				window.open('https://www.radius.com', '_blank')?.focus();
			}}
			>Radius' Website<svg
				class="ml-2 h-3 w-3"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			></Button
		>
	</TimelineItem>
	<TimelineItem title="Accounting Assistant" date="May 2022">
		<P class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Effectively managed VAT liabilities, secured start-up grants, and collaborated with the main
			accountant. Created an advanced Excel spreadsheet for comprehensive scenario planning and
			expense tracking.
		</P>
		<Button
			href="https://voolu.co.uk"
			class={btnClass}
			color="alternative"
			on:click={(e) => {
				e.preventDefault();
				window.open('https://voolu.co.uk', '_blank')?.focus();
			}}
			>Voolu's Website<svg
				class="ml-2 h-3 w-3"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			></Button
		>
	</TimelineItem>
</Timeline>
