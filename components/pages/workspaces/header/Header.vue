<template>
  <div class="mb-4">
    <header
      class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-2 w-full h-10"
    >
      <!-- TITLE -->
      <PagesWorkspacesRessourcesFolder
        :title="$t(`projects.title`)"
        :description="$t(`projects.description`)"
        class="col-span-3"
        :icon="Layers"
      />
      <!-- SEARCHBAR -->
      <div class="relative items-center col-start-5 w-full">
        <UiInput
          id="search"
          type="text"
          placeholder="Search..."
          class="pl-10"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
    </header>

    <UiSeparator class="my-2" />

    <!-- ACTIONS -->
    <PagesWorkspacesHeaderActions />
  </div>
  <UiSeparator class="my-2" />
</template>
<script setup lang="ts">
import { Search, Layers } from "lucide-vue-next";
</script>
