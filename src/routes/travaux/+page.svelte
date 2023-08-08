<script lang="ts">
	import { coordsStore } from '../../stores/coordsStore'; // Adjust the path accordingly

	const coords = {
		x: 0,
		y: 0
	};

	// Subscribe to the coordsStore
	coordsStore.subscribe((value) => {
		coords.x = value.x;
		coords.y = value.y;
	});
</script>

<div class="w-full h-screen pt-36">
	<div
		style="transform: translateY(calc({coords.y / 100}% ))"
		class={`transition-all  ease-in-out fixed inset-y-0 left-0 opacity-10 h-full flex flex-col gap-72 items-center px-36 -py-10 uppercase `}
	>
		<span class="text-8xl rotate-90 p-4 transform origin-left text-stroke-3 text-[#111111]"
			>Travaux-</span
		>
		<span class="text-8xl rotate-90 p-4 transform origin-left text-stroke-3 text-[#111111]"
			>Travaux-</span
		>
		<span class="text-8xl rotate-90 p-4 transform origin-left text-stroke-3 text-[#111111]"
			>Travaux-</span
		>

		<span class="text-8xl rotate-90 p-4 transform origin-left text-stroke-3 text-[#111111]"
			>Travaux-</span
		>
	</div>

	<div
		style="transform: translateY(calc(-{coords.y / 100}%))"
		class="transition-all ease-in-out fixed inset-y-0 left-32 opacity-10 h-full flex flex-col gap-72 items-center px-36 -py-10 uppercase"
	>
		<span class="text-8xl -rotate-90 p-4 transform origin-left text-stroke-3 text-[#111111]"
			>Travaux-</span
		>
		<span class="text-8xl -rotate-90 p-4 transform origin-left text-stroke-3 text-[#111111]"
			>Travaux-</span
		>

		<span class="text-8xl rotate-90 p-4 transform origin-left text-stroke-3 text-[#111111]"
			>Travaux-</span
		>

		<span class="text-8xl rotate-90 p-4 transform origin-left text-stroke-3 text-[#111111]"
			>Travaux-</span
		>
	</div>

	<section class="px-8 lg:px-36 relative z-10">
		<div class="">
			<h1 class="text-2xl text-white text-center font-Crusader">Travaux</h1>
			<div class="gap-2 flex flex-col">
				<div class="grid lg:grid-cols-2 my-8">
					<div class="">
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
							voies éducatives et professionnelles.Cette plateforme a été développée en utilisant le
							framework Laravel, garantissant une expérience de navigation idéeale.
						</p>
					</div>
				</div>

				<div class="grid lg:grid-cols-2 my-8">
					<div class=" lg:order-2">
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
							professionnels exceptionnels. En combinant des technologies modernes telles que React,
							TypeScript et Tailwind CSS.
						</p>
					</div>
				</div>

				<div class="grid lg:grid-cols-2 my-8">
					<div class="">
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
</div>
