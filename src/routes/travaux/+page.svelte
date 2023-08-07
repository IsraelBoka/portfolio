<script>
	import { base } from '$app/paths';
</script>

<div
	id="background-text "
	class="pointer-events-none absolute z-0 w-full h-full top-0 left-0 inset-0"
>
	<div class="relative flex text-[#111111] text-stroke-3">
		<div
			class="py-4 uppercase flex-col flex animate-marquee-up whitespace-nowrap h-screen opacity-70"
		>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
		</div>

		<div
			class="absolute bottom-0 py-4 uppercase flex-col flex top-0 animate-marquee-down opacity-70 whitespace-nowrap h-screen text-[#111111] text-stroke-3"
		>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
			<span class="text-5xl lg:text-7xl mx-4 my-4">Travaux </span>
		</div>
	</div>
</div>

<section class="px-16 relative z-10">
	<div class="">
		<h1 class="text-2xl text-white text-center font-Crusader">Travaux</h1>
		<div class="gap-2 flex flex-col">
			<div class="grid lg:grid-cols-2 my-8">
				<div class="border-white p-2 border-2 rounded">
					<img
						src="images/projet_orientation.webp"
						alt="Image du projet orientation"
						class="rounded"
						aria-hidden="true"
					/>
				</div>
				<div class="py-4 lg:px-4 flex items-center">
					<p class="text-sm md:text-xl lg:text-2xl text-white text-center">
						<a
							href="https://Orientation-Apprentissage.net"
							class="underline hover:opacity-90 font-bold"
							target="_blank"
						>
							Orientation&Apprentissage</a
						> est une plateforme en ligne conçue pour aider les utilisateurs à découvrir leurs futures
						voies éducatives et professionnelles.Cette plateforme a été développée en utilisant le puissant
						framework Laravel, garantissant une expérience fluide et robuste pour chaque utilisateur.
						C'est une boussole guidant vers un avenir gratifiant et réussi.
					</p>
				</div>
			</div>

			<div class="grid lg:grid-cols-2 my-8">
				<div class="border-white p-2 border-2 lg:order-2 rounded">
					<img
						src="images/projet_dabara.webp"
						alt="Image du projet dabara"
						class="rounded"
						aria-hidden="true"
					/>
				</div>
				<div class="py-4 lg:px-4 flex items-center">
					<p class="text-sm md:text-xl lg:text-2xl text-white text-center">
						<a
							href="https://dabara.tech"
							class="underline hover:opacity-90 font-bold"
							target="_blank"
						>
							Dabara</a
						> est une application web novatrice conçue pour permettre aux individus de créer des portfolios
						professionnels exceptionnels. En combinant des technologies modernes telles que React, TypeScript
						et Tailwind CSS, Dabara offre une expérience fluide et conviviale pour mettre en valeur les
						projets, les compétences et les réalisations de chaque utilisateur.
					</p>
				</div>
			</div>

			<div class="grid lg:grid-cols-2 my-8">
				<div class="border-white p-2 border-2 rounded">
					<img
						src="images/projet_chap.webp"
						alt="Image du projet chap"
						class="rounded"
						aria-hidden="true"
					/>
				</div>
				<div class="py-4 lg:px-4 flex items-center">
					<p class="text-sm md:text-xl lg:text-2xl text-white text-center">
						<a
							href="https://chapchaponlyts.vercel.app"
							class="underline hover:opacity-90 font-bold"
							target="_blank"
						>
							Chap</a
						> est une application de livraison à la demande qui simplifie la manière dont les utilisateurs
						reçoivent des produits et des colis. Grâce à une plateforme conviviale et à une technologie
						avancée, Chap permet aux utilisateurs de planifier, de suivre et de recevoir des livraisons
						en toute simplicité.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.text-stroke-3 {
		text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
	}
</style>
