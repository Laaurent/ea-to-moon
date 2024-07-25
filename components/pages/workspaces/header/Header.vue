<template>
  <header class="grid-container w-full h-8 mb-4">
    <!-- TITLE -->
    <PagesWorkspacesRessourcesFolder
      :title="$t(`projects.title`)"
      :description="$t(`projects.description`)"
      class=""
      :icon="Layers"
    />
    <!-- Workspaces -->
    <UiSelect class="relative">
      <UiSelectTrigger class="grid-end w-full">
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
  </header>
  <UiSeparator class="my-2" />
</template>
<script setup lang="ts">
import { Search, Layers } from "lucide-vue-next";
</script>
