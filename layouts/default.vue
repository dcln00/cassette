<script setup lang="ts">

</script>

<template lang="pug">
div
	.color-mode
		div(v-if="$colorMode.value === 'light'" @click="$colorMode.preference = 'dark'")
			Icon(name="material-symbols:wb-sunny-outline-rounded" size="1.2em" color="black")
		div(v-else-if="$colorMode.value === 'dark'" @click="$colorMode.preference = 'light'")
			Icon(name="material-symbols:dark-mode-outline" size="1.2em")
	main
		slot
</template>

<style lang="scss">
.color-mode {
	position: absolute;
	right: 1rem;
	top: 1rem;
}

.dark-mode #hero {
  background-color: #121212;
  color: #ffffff;
}
.light-mode #hero {
  background-color: #fff;
  color: #000;
}
</style>