<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { AvatarRoot } from "radix-vue";
import { type AvatarVariants, avatarVariant } from ".";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    size?: AvatarVariants["size"];
    shape?: AvatarVariants["shape"];
  }>(),
  {
    size: "sm",
    shape: "square",
  }
);
</script>

<template>
  <AvatarRoot
    :class="
      cn(avatarVariant({ size, shape }), props.class, 'border-2 border-border')
    "
  >
    <slot />
  </AvatarRoot>
</template>
