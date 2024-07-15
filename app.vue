<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtRouteAnnouncer />
    <main class="app">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "radix-vue";
const useIdFunction = () => useId();
</script>
