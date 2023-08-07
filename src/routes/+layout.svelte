<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<head>
	<title>
		{#if $page.url.pathname === `${base}/`}
			Israel Boka
		{:else if $page.url.pathname === `${base}/travaux`}
			Les 12 travaux d'Hercule
		{:else if $page.url.pathname === `${base}/experience`}
			Israel Boka | Experience
		{:else if $page.url.pathname === `${base}/contact`}
			Israel Boka | Me contacter
		{/if}
	</title>
</head>
<div class="container">
	<nav class="flex justify-between py-8 px-16 relative z-10">
		<div class="text-white h-12 text-sm font-bold flex">
			<div class="h-12 w-1.5 bg-white" />
			<div class="flex flex-col items-center justify-center mx-1 my-2">
				<a href="resume.pdf" class="hover:opacity-80 transition-colors" download="CV_BOKA_ISRAEL"
					>Mon CV</a
				>
				<a href="https://dabara.tech/Israelboka" class="hover:opacity-80 transition-colors"
					>Portfolio</a
				>
			</div>
		</div>

		<li class="text-white flex flex-col gap-2 uppercase font-Founders">
			<a
				href={`${base}/`}
				class=" inline-flex flex-row-reverse justify-between group active:text-red-500"
			>
				<div
					class:text-white={$page.url.pathname === `${base}/`}
					class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors"
				>
					A propos
				</div>
				<div
					class:bg-[length:100%_2px]={$page.url.pathname === `${base}/`}
					class=" w-6 h-0.5 my-2 mx-1 bg-right-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
				/>
			</a>

			<a href={`${base}/travaux`} class="inline-flex flex-row-reverse justify-between group">
				<div
					class:text-white={$page.url.pathname === `${base}/travaux`}
					class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors"
				>
					Travaux
				</div>
				<div
					class:bg-[length:100%_2px]={$page.url.pathname === `${base}/travaux`}
					class=" w-6 h-0.5 my-2 mx-1 bg-right-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
				/>
			</a>

			<a href={`${base}/experience`} class="inline-flex flex-row-reverse justify-between group">
				<div
					class:text-white={$page.url.pathname === `${base}/experience`}
					class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors"
				>
					experience
				</div>
				<div
					class:bg-[length:100%_2px]={$page.url.pathname === `${base}/experience`}
					class=" w-6 h-0.5 my-2 mx-1 bg-right-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
				/>
			</a>

			<a href={`${base}/contact`} class="inline-flex flex-row-reverse justify-between group">
				<div
					class:text-white={$page.url.pathname === `${base}/contact`}
					class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors"
				>
					Contact
				</div>
				<div
					class:bg-[length:100%_2px]={$page.url.pathname === `${base}/contact`}
					class=" w-6 h-0.5 my-2 mx-1 bg-right-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
				/>
			</a>
		</li>
	</nav>
	<slot />

	<footer class="flex justify-end pb-4 px-16">
		{#if $page.url.pathname === '/'}
			<span
				class=" text-4xl font-bold text-white bg-gradient-to-r from-white to-white bg-bottom bg-no-repeat bg-[length:100%_6px] transition-[background-size]"
				>00</span
			>
		{/if}
		{#if $page.url.pathname === '/travaux'}
			<span
				class=" text-4xl font-bold text-white bg-gradient-to-r from-white to-white bg-bottom bg-no-repeat bg-[length:100%_6px] transition-[background-size]"
				>01.
			</span>
		{/if}
		{#if $page.url.pathname === '/experience'}
			<span
				class=" text-4xl font-bold text-white bg-gradient-to-r from-white to-white bg-bottom bg-no-repeat bg-[length:100%_6px] transition-[background-size]"
				>02.</span
			>
		{/if}
		{#if $page.url.pathname === '/contact'}
			<span
				class=" text-4xl font-bold text-white bg-gradient-to-r from-white to-white bg-bottom bg-no-repeat bg-[length:100%_6px] transition-[background-size]"
				>03.</span
			>
		{/if}
	</footer>
</div>
