<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */
	export let data;
	import '../app.css';
	import { onMount } from 'svelte';
	import { returnRandomEmoji } from '$lib/randomEmoji';

	let count = 0;
	let finalText = '';

	// conter function
	function counter(intervel, max, step) {
		let interval = setInterval(() => {
			count = count + step > max ? max : count + step;
			console.log(count + ' ' + interval);
			finalText = count.toString() + ' ' + returnRandomEmoji();
			if (count >= max) {
				clearInterval(interval);
			}
		}, intervel);
	}

	onMount(() => {
		counter(10, data.count.count, 8);
	});
</script>

<div class="dark:bg-[#070704] bg-[#EDEDDE]">
	<div class="flex flex-col h-screen items-center justify-center">
		<a
			href="https://github.com/RandomCoderOrg/ubuntu-on-android"
			target="_blank"
			referrerpolicy="no-referrer"
			class="text-[#070704] dark:text-[#ededde] text-6xl hover:underline dark:decoration-[#705091] text-bold font-mono"
			>UDROID Downloads</a
		>
		<p class="font-light font-mono text-3xl text-[#070704] dark:text-[#ededde]">{finalText}</p>
	</div>
</div>
