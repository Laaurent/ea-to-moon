<template>
  <slot />
</template>
<script setup>
import { useMagicKeys } from "@vueuse/core";

let pressed = ref({});

const { current } = useMagicKeys();

watch(current, (v) => {
  pressed.value = v;
});

provide("keysPressed", pressed.value);
</script>
