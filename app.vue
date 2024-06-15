<script setup lang="ts">
defineOgImageComponent('WebApp')

useHead({
	htmlAttrs: {
		lang: 'en',
	},
	title: `Cassette`,
	meta: [
		{ name: 'description', content: 'Cassette Productions' },
	],
	link: [
		{
			rel: 'icon',
			href: '/favicon.ico',
		},
	],
})

useSeoMeta({
	ogTitle: 'Cassette',
	ogDescription: 'Cassette Productions',
	twitterTitle: 'Cassette',
	twitterDescription: 'Cassette Productions',
	twitterCard: 'summary',
})
</script>

<template lang="pug">
NuxtPage
</template>