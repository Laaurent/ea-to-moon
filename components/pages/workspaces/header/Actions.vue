<template>
  <div class="grid-container items-center">
    <!-- search -->
    <div class="relative">
      <UiInput
        type="text"
        v-model.lazy="params.name.value"
        :placeholder="`${$t('actions.search')} ...`"
        class="pl-10"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
    <!-- FILTERS -->
    <div>
      <UiBadge
        class="mr-2"
        v-for="param in Object.keys(params)"
        variant="secondary"
        >{{ param }} : {{ params[param].value }}</UiBadge
      >
    </div>

    <div class="grid-end flex justify-end gap-2">
      <!-- FILTER -->

      <!-- SORT -->
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton variant="dashed" class="min-w-52">
            <ArrowUpDown class="h-4 w-4 mr-2" />
            <span>{{ $t(`ressources.sortBy.title`) }} </span>
            <span>&nbsp;:&nbsp;</span>
            <span class="font-secondary text-muted-foreground">
              {{ $t(`ressources.sortBy.${selectedSort}`) }}
            </span>
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowUpDown, Search } from "lucide-vue-next";
import { useProjectStore } from "@/store/project";

const projectStore = useProjectStore();
const { params, sortOptions, selectedSort } = storeToRefs(projectStore);
</script>
