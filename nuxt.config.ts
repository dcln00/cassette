export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Cassette',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, maximum-scale=1',
				},
				{
					name: 'description',
					content: 'Cassette Productions',
				},
			],
		},
	},
	css: ['~/assets/style/app.scss'],
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'nuxt-icon',
		'@nuxtjs/device',
		'@nuxt/fonts',
		'nuxt-og-image',
	],
	site: {
		url: 'https://cassette.productions',
	},
})
