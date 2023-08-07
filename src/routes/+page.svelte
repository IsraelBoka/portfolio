<script lang="ts">
	import { base } from '$app/paths';
</script>

<nav class="flex justify-end py-8 px-16">
	<li class="text-white flex flex-col gap-2 uppercase font-Founders">
		<a href={''} class="inline-flex flex-row-reverse justify-between group">
			<div class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
				A propos
			</div>
			<div
				class=" w-6 h-0.5 my-2 mx-1 bg-right-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
			/>
		</a>

		<a href={''} class="inline-flex flex-row-reverse justify-between group">
			<div class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
				Travaux
			</div>
			<div
				class=" w-6 h-0.5 my-2 mx-1 bg-right-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
			/>
		</a>

		<a href={''} class="inline-flex flex-row-reverse justify-between group">
			<div class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
				Education
			</div>
			<div
				class=" w-6 h-0.5 my-2 mx-1 bg-right-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
			/>
		</a>

		<a href={''} class="inline-flex flex-row-reverse justify-between group">
			<div class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
				Contact
			</div>
			<div
				class=" w-6 h-0.5 my-2 mx-1 bg-right-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
			/>
		</a>
	</li>
</nav>

<section>
	<div id="background-text " class="pointer-events-none absolute z-0 w-screen">
		<div class="relative flex overflow-x-hidden text-[#111111] text-stroke-3">
			<div class="py-12 uppercase animate-marquee whitespace-nowrap">
				<span class="text-5xl lg:text-9xl mx-4">Kyrie </span>
				<span class="text-5xl lg:text-9xl mx-4">eleison </span>
				<span class="text-5xl lg:text-9xl mx-4">Christe </span>
				<span class="text-5xl lg:text-9xl mx-4">eleison </span>
			</div>

			<div
				class="absolute uppercase top-0 py-12 animate-marquee2 whitespace-nowrap text-[#111111] text-stroke-3"
			>
				<span class="text-5xl lg:text-9xl mx-4">Kyrie </span>
				<span class="text-5xl lg:text-9xl mx-4">eleison </span>
				<span class="text-5xl lg:text-9xl mx-4">Christe </span>
				<span class="text-5xl lg:text-9xl mx-4">eleison </span>
			</div>
		</div>
	</div>
	<div class="flex mt-16 flex-col justify-center items-center font-bold text-white z-10 relative">
		<h2 class="uppercase text-2xl">Salut, Je suis</h2>
		<h1 class="uppercase text-5xl lg:text-7xl">BOKA ISRAEL</h1>
		<p class="text-xl lg:text-3xl text-center lg:px-24">
			I&apos;m a creative developer from Abidjan with a passion for CSS, animation, developer
			experience, and deleting code.
		</p>
	</div>
</section>

<style>
	.text-stroke-3 {
		text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
	}
</style>
