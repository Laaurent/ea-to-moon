<template>
  <div class="h-full">
    <PagesWorkspacesHeader />
    <!-- FOLDERS -->
    <PagesWorkspacesRessourcesContainer ressource="folders">
      <section
        class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-flow-col gap-2 overflow-x-scroll"
      >
        <PagesWorkspacesRessourcesFolder
          v-for="n in 2"
          :title="`Folder n°${n}`"
          :description="`Folder n°${n} description`"
        />
        <PagesWorkspacesRessourcesFolder
          :title="$t(`projects.folders.create`)"
          :icon="Plus"
          variant="secondary"
        />
      </section>
    </PagesWorkspacesRessourcesContainer>

    <!-- REPORT -->
    <PagesWorkspacesRessourcesContainer
      ressource="reports"
      :count="2"
      newRessource
    >
      <!-- <UiEmptyState ressource="projets.reports" /> -->
      <section class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-2">
        <PagesWorkspacesRessourcesReport v-for="n in 20" />
      </section>
    </PagesWorkspacesRessourcesContainer>
  </div>
</template>
<script setup lang="ts">
import { Plus } from "lucide-vue-next";
</script>

<style scoped lang="scss"></style>
