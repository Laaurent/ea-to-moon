<template>
  <header class="flex items-center gap-2 w-full">
    <div class="relative w-64 items-center">
      <UiInput id="search" type="text" placeholder="Search..." class="pl-10" />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
    <UiSeparator orientation="vertical" class="my-1 h-8" />
    <UiButton variant="secondary">
      <ListFilter class="h-4 w-4 mr-2" />
      Filtres
    </UiButton>
    <UiButton variant="secondary">
      <ArrowUpDown class="h-4 w-4 mr-2" />
      Sort
    </UiButton>
    <section class="ml-auto flex">
      <UiToggleSwitch :inputs="toggleView" />
    </section>
  </header>
</template>
<script setup lang="ts">
const toggleView = ref<IToggle[]>([
  {
    name: "list",
    icon: List,
  },
  {
    name: "grid",
    icon: LayoutGrid,
  },
]);
import {
  ListFilter,
  ArrowUpDown,
  List,
  LayoutGrid,
  Search,
} from "lucide-vue-next";
import type { IToggle } from "~/types/navigation";
</script>
