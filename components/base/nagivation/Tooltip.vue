<template>
  <UiTooltipProvider :delayDuration :disabled>
    <UiTooltip>
      <UiTooltipTrigger>
        <slot name="trigger" />
      </UiTooltipTrigger>
      <UiTooltipContent :side="'right'" :sideOffset="20" class="font-medium">
        <slot name="content" />
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
</template>
<script setup lang="ts">
const props = defineProps({
  delayDuration: {
    type: Number,
    default: 300,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  side: {
    /*    type: String as "start" | "center" | "end",  */ // 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'center
    default: "center",
  },
});
</script>
