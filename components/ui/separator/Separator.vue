<script setup lang="ts">
import { Separator, type SeparatorProps } from "radix-vue";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'separator shrink-0 bg-border',
        props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
        props.class
      )
    "
  />
</template>
