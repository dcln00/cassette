<template lang="pug">
section#hero.w-full
	.nested.flex.items-center.justify-center.flex-col
		.socials.flex
			NuxtLink(to="https://x.com/cassetteGH")
				Icon(name="fa6-brands:x-twitter" size="1.2em")
			NuxtLink(to="https://instagram.com/Cassette_Gh")
				Icon(name="fa6-brands:instagram" size="1.2em")
		.filler(class="pt-[4rem] pb-[4rem]")
		.logo.grow.flex.items-center
				SvgoLogoLight(v-if="$colorMode.value === 'dark'" class="w-full h-auto" :fontControlled="false")
				SvgoLogoDark(v-else-if="$colorMode.value === 'light'" class="w-full h-auto" :fontControlled="false")
		.details.flex(:class="$device.isDesktop ? 'pt-[5rem] pb-[5rem]' : 'flex-col pt-[5rem] pb-[5rem] text-center'")
			.tel 
				NuxtLink(to="tel:+2330209679993") +233.(0).20.967.9993
			.email
				NuxtLink(to="mailto:info@cassette.productions") info@cassette.productions
</template>

<style lang="scss" scoped>
#hero {
	background-color: #121212;

	.nested {
		height: 100dvh;
		overflow: hidden;
		// position: relative;

		.socials {
			position: absolute;
			top: 1rem;
			left: 1rem;
			column-gap: 15px;
		}

		.logo {
			width: 200px;
			height: auto;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}

	.details {
		column-gap: 20px;
		font-size: 12px;
		text-transform: uppercase;
	}
}

@media screen and (max-width: '576px') {
	#hero {
		.nested {
			.logo {
				width: 150px;
			}
		}
		.details {
			font-size: 10px;
		}
	}
}
</style>
