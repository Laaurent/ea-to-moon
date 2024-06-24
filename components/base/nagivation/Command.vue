<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";
import { Search } from "lucide-vue-next";

const open = ref(false);

const props = defineProps({
  size: {
    type: String,
    default: "small",
  },
});
const isSmall = computed(() => props.size !== "large");

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) e.preventDefault();
  },
});

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1]) handleOpenChange();
});

function handleOpenChange() {
  open.value = !open.value;
}
</script>

<template>
  <div>
    <p class="text-sm text-muted-foreground">
      <UiButton
        @click="open = !open"
        variant="ghost"
        class="flex items-center gap-2 px-2 w-full justify-between text-muted-foreground hover:text-secondary-foreground border border-secondary"
      >
        <span class="flex items-center gap-2">
          <Search />
          <span v-if="!isSmall">Rechercher</span>
        </span>
        <UiKbd v-if="!isSmall"> <span class="text-xs">⌘</span>+K </UiKbd>
      </UiButton>
    </p>
    <UiCommandDialog v-model:open="open">
      <UiCommandInput placeholder="Type a command or search..." />
      <UiCommandList>
        <UiCommandEmpty>No results found.</UiCommandEmpty>
        <UiCommandGroup heading="Suggestions">
          <UiCommandItem value="calendar"> Calendar </UiCommandItem>
          <UiCommandItem value="search-emoji"> Search Emoji </UiCommandItem>
          <UiCommandItem value="calculator"> Calculator </UiCommandItem>
        </UiCommandGroup>
        <UiCommandSeparator />
        <UiCommandGroup heading="Settings">
          <UiCommandItem value="profile"> Profile </UiCommandItem>
          <UiCommandItem value="billing"> Billing </UiCommandItem>
          <UiCommandItem value="settings"> Settings </UiCommandItem>
        </UiCommandGroup>
      </UiCommandList>
    </UiCommandDialog>
  </div>
</template>
