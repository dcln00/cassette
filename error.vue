<script setup lang="ts">
useHead({
	titleTemplate: 'Page Not Found - %s '
})
</script>

<template lang="pug">
div
	NuxtLayout
		section#error.w-full.h-screen.flex.justify-center.items-center.flex-col
			.title 404 - Page Not Found
			.return.text-xs.pt-3.cursor-pointer(@click="clearError({ redirect: '/' })") Return Home
</template>

<style lang="scss" scoped>
.dark-mode #error {
  background-color: #121212;
  color: #ffffff;
}
.light-mode #error {
  background-color: #fff;
  color: #000;
}
</style>