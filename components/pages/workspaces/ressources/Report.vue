<script setup lang="ts">
import { Ellipsis, Home } from "lucide-vue-next";
</script>

<template>
  <article class="bg-card rounded-lg border border-border">
    <div class="h-32 w-full bg-muted"></div>
    <footer class="p-3">
      <div class="flex items-center gap-2">
        <h1 class="text-xl font-medium">Wokspace n°1</h1>
        <UiButton class="ml-auto" variant="ghost" size="icon">
          <Ellipsis class="h-4 w-4" />
        </UiButton>
      </div>
      <div class="flex flex-wrap items-center gap-1">
        <UiBadge variant="secondary">#provider</UiBadge>
        <UiBadge variant="secondary">#provider</UiBadge>
      </div>
    </footer>
  </article>
</template>
