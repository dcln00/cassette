<template lang="pug">
section#hero.w-full
	.nested.flex.items-center.justify-center.flex-col
		.filler(class="pt-[4rem] pb-[4rem]")
		.logo.grow
			NuxtImg(src='/logo-light.svg')
		.details.flex(:class="$device.isDesktop ? 'pt-[5rem] pb-[5rem]' : 'flex-col pt-[5rem] pb-[5rem] text-center'")
			.tel 
				NuxtLink(to="tel:+2330209679993") +233.(0).20.967.9993
			.email
				NuxtLink(to="mailto:info@cassette.productions") info@cassette.productions
</template>

<style lang="scss">
#hero {
	background-color: #121212;
	
	.nested {
		height: 100dvh;
		overflow: hidden;

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
				width: 110px;
			}
		}
		.details {
			font-size: 10px;
		}
	}
}
</style>
