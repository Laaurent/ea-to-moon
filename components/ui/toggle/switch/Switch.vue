<template>
  <div class="flex items-center h-10 bg-primary-foreground p-1 rounded">
    <UiToggle
      v-for="input in inputs"
      aria-label="Toggle list view"
      @click="toggle(input.name)"
      :pressed="view === input.name"
      class="h-9 w-9 p-2"
    >
      <component :is="input.icon" class="h-6 w-6" />
    </UiToggle>
  </div>
</template>
<script setup lang="ts">
import type { IToggle } from "~/types/navigation";

const props = defineProps({
  inputs: { type: Array as PropType<IToggle[]>, required: true },
});

const view = ref("list");

function toggle(viewName: string) {
  view.value = viewName;
}
</script>
