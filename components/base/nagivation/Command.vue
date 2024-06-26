<template>
  <div>
    <p class="text-sm text-muted-foreground">
      <UiButton
        @click="toggleShowCommand()"
        variant="ghost"
        class="flex items-center gap-2 px-2 w-full justify-between text-muted-foreground hover:text-secondary-foreground border bg-secondary"
      >
        <span class="flex items-center gap-2">
          <Search />
          <span v-if="!isSmall">{{ $t("actions.search") }}</span>
        </span>
        <UiKbd v-if="!isSmall"> <span class="text-xs">⌘</span>+K </UiKbd>
      </UiButton>
    </p>
    <UiCommandDialog v-model:open="showCommand">
      <UiCommandInput :placeholder="$t('actions.searchText')" />
      <UiCommandList>
        <UiCommandEmpty>{{ $t("noResults") }}</UiCommandEmpty>
        <UiCommandGroup :heading="$t('sections.pages')">
          <UiCommandItem
            v-for="link in links"
            :value="link.name"
            class="flex items-center gap-2"
            @click="routeTo(link.path)"
          >
            <component :is="link.icon" size="16" />
            <span> {{ $t(`links.${link.name}`) }}</span>
          </UiCommandItem>
        </UiCommandGroup>
        <UiCommandSeparator />
        <UiCommandGroup heading="[Settings]">
          <UiCommandItem value="profile"> Profile </UiCommandItem>
          <UiCommandItem value="billing"> Billing </UiCommandItem>
          <UiCommandItem value="settings"> Settings </UiCommandItem>
        </UiCommandGroup>
      </UiCommandList>
    </UiCommandDialog>
  </div>
</template>
<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";
import { useNavbarStore } from "~/store/navbar";
import { Search } from "lucide-vue-next";

const router = useRouter();
const localePath = useLocalePath();

// STORE
const store = useNavbarStore();
const { links, showCommand, isSmall } = toRefs(store);
const { toggleShowCommand } = store;

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) e.preventDefault();
  },
});

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1]) toggleShowCommand();
});

function routeTo(link: string) {
  toggleShowCommand();
  router.push(localePath(link));
}
</script>
