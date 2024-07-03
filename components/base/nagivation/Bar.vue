<template>
  <nav class="navbar__container">
    <div class="navbar__header mb-4 flex items-center mt-4">
      <UiButton @click="toggleSize()" variant="ghost" size="icon">
        <PanelLeft class="w-4 h-4" />
      </UiButton>
    </div>

    <!-- top -->
    <div class="navbar__menu gap-1">
      <BaseNagivationCommand :size class="w-full" />
      <UiSeparator class="my-1" />
      <BaseNagivationLink v-for="link in topLinks" :link />
    </div>

    <UiSeparator class="my-2" />

    <!-- bottom -->
    <div class="navbar__menu_bottom">
      <BaseNagivationLang />
      <BaseNagivationTheme />
      <BaseNagivationLink v-for="link in bottomLinks" :link />
    </div>
    <UiSeparator class="my-2" />
    <BaseNagivationAvatar />
  </nav>
</template>

<script setup lang="ts">
import { useWindowSize, whenever, useMagicKeys } from "@vueuse/core";
import { PanelLeft } from "lucide-vue-next";
import { Home, Inbox, Layers, Bolt } from "lucide-vue-next";
import { useNavbarStore } from "~/store/navbar";
import type { INavbarLink } from "~/types/navigation";

const { width } = useWindowSize();
const { Ctrl, Meta } = useMagicKeys();

const links = ref<INavbarLink[]>([
  {
    name: "home",
    path: "/",
    icon: Home,
    shortCut: ["⌘", "1"],
    position: "top",
  },
  {
    name: "workspaces",
    path: "/workspaces",
    icon: Layers,
    shortCut: ["⌘", "2"],
    position: "top",
  },
  {
    name: "settings",
    path: "/settings",
    icon: Bolt,
    shortCut: ["⌘", "9"],
    position: "bottom",
  },
]);

// PROPS
const topLinks = computed(() =>
  links.value.filter((link) => link.position === "top")
);
const bottomLinks = computed(() =>
  links.value.filter((link) => link.position === "bottom")
);
const workspacesLinks = computed(() =>
  links.value.filter((link) => link.position === "workspaces")
);

// STORE
const store = useNavbarStore();
const { size } = storeToRefs(store);
const { setLinks, toggleSize, toggleShowKeys } = store;

setLinks(links.value);

whenever(width, () => {
  if (width.value < 1024) {
    toggleSize("small");
  }
});

watch([Ctrl, Meta], (v) => {
  if (v) toggleShowKeys();
});
</script>

<style scoped lang="scss">
.navbar__container,
.navbar__menu,
.navbar__menu_bottom {
  display: flex;
  flex-direction: column;
}
.navbar__container {
  height: 100%;

  .navbar__menu_bottom {
    margin-top: auto;

    .navbar__avatar {
      border: $border;
    }
  }
}
</style>
