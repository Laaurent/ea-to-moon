<template>
  <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-2">
    <!-- WORKSPACE -->
    <UiSelect>
      <UiSelectTrigger class="w-auto">
        <UiSelectValue :placeholder="$t('projects.workspaces.select')" />
      </UiSelectTrigger>
      <UiSelectContent>
        <UiSelectItem value="apple"> Apple </UiSelectItem>
        <UiSelectItem value="banana"> Banana </UiSelectItem>
        <UiSelectItem value="blueberry"> Blueberry </UiSelectItem>
        <UiSelectItem value="grapes"> Grapes </UiSelectItem>
        <UiSelectItem value="pineapple"> Pineapple </UiSelectItem>
      </UiSelectContent>
    </UiSelect>

    <div class="col-start-5 flex items-center justify-end gap-2 col-span-2">
      <!-- FILTER -->
      <UiButton variant="dashed" class="min-w-52">
        <Filter class="h-4 w-4 mr-2" />
        <span>{{ $t(`ressources.filterBy`) }} </span>
        <span>&nbsp;:&nbsp;</span>
        <span class="text-muted-foreground">
          {{ $t(`ressources.all`) }}
        </span>
      </UiButton>
      <!-- SORT -->
      <UiButton variant="dashed" class="min-w-52">
        <ArrowUpDown class="h-4 w-4 mr-2" />
        <span>{{ $t(`ressources.sortBy`) }} </span>
        <span>&nbsp;:&nbsp;</span>
        <span class="font-secondary text-muted-foreground">
          {{ $t(`ressources.all`) }}
        </span>
      </UiButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Filter, ArrowUpDown } from "lucide-vue-next";
</script>
