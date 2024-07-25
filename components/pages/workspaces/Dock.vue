<template>
  <UiDock :expanded>
    <!-- SEARCHING -->
    <div
      class="search border border-border relative w-10 h-10 focus-within:w-40 transition-all duration-200 ease-out"
    >
      <UiInput
        id="search"
        type="text"
        :placeholder="`${$t('actions.search')}...`"
        class="border-none absolute w-full group z-10 pl-10 bg-transparent truncate placeholder:opacity-0 focus:placeholder:opacity-100"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-5 text-muted-foreground" />
      </span>
    </div>

    <!-- SORTING -->
    <UiDropdownMenu>
      <UiDropdownMenuTrigger as-child>
        <UiButton variant="ghost" size="icon" class="text-muted-foreground">
          <ArrowUpDown class="h-5 w-5" />
        </UiButton>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent class="w-56">
        <UiDropdownMenuLabel>{{
          $t(`ressources.sortBy.title`)
        }}</UiDropdownMenuLabel>
        <UiDropdownMenuSeparator />
        <UiDropdownMenuRadioGroup v-model="selectedSort">
          <UiDropdownMenuRadioItem
            v-for="option in sortOptions"
            :key="option"
            :value="option"
          >
            {{ $t(`ressources.sortBy.${option}`) }}
          </UiDropdownMenuRadioItem>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
    <!-- NEW FOLDER -->
    <UiButton variant="ghost" size="icon" class="text-muted-foreground">
      <FolderPlus class="h-5 w-5" />
    </UiButton>
    <!-- NEW RESSOURCE -->
    <UiButton size="icon">
      <Plus class="h-5 w-5" />
    </UiButton>
  </UiDock>
</template>
<script setup lang="ts">
import { FolderPlus, ArrowUpDown, Plus, Search } from "lucide-vue-next";
import { useScroll } from "@vueuse/core";
import { useProjectStore } from "@/store/project";

const props = defineProps({
  el: {
    type: HTMLElement as PropType<HTMLElement | null>,
    required: true,
  },
});

const { el } = toRefs(props);

const { y } = useScroll(el);

const expanded = computed(() => {
  return y.value > 40;
});

const projectStore = useProjectStore();
const { sortOptions, selectedSort } = storeToRefs(projectStore);
</script>
