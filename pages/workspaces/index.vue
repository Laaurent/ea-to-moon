<template>
  <div class="h-full">
    <PagesWorkspacesHeader />

    <div ref="el" class="h-[calc(100vh-8rem)] overflow-y-auto">
      <PagesWorkspacesHeaderActions />
      <UiSeparator class="my-2" />
      <!-- FOLDERS -->
      <PagesWorkspacesRessourcesContainer
        ressource="folders"
        class="scroll-mt-2"
      >
        <section class="grid-container overflow-x-scroll">
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
        <section class="grid-container overflow-y-auto">
          <PagesWorkspacesRessourcesReport v-for="n in 20" />
        </section>
      </PagesWorkspacesRessourcesContainer>
    </div>
    <PagesWorkspacesDock :el />
  </div>
</template>
<script setup lang="ts">
import { Plus } from "lucide-vue-next";
const el = ref<HTMLElement | null>(null);
</script>

<style scoped lang="scss"></style>
