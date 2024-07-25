<template>
  <nav class="navbar__container h-full">
    <div class="navbar__header mb-4 flex items-center mt-4">
      <UiButton @click="toggleSize()" variant="ghost" size="icon">
        <PanelLeft class="w-4 h-4" />
      </UiButton>
    </div>

    <!-- top -->
    <div class="navbar__items navbar__menu gap-1">
      <BaseNagivationCommand :size class="w-full" />
      <UiSeparator class="my-1" />
      <BaseNagivationLink v-for="link in topLinks" :link />
    </div>

    <UiSeparator class="my-2" />

    <!-- bottom -->
    <div class="navbar__items navbar__menu_bottom mt-auto">
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
</style>
<style lang="scss">
.bar__item {
  cursor: pointer;
  width: 360px;
  height: 42px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  background: none;
  border-radius: var(--radius);
  color: hsl(var(--muted-foreground));

  transition: $transition_all;
  .bar__item_icon {
    width: 24px;
    height: 24px;
  }
  &:hover {
    /* background-color: var(--bg-secondary); */
    color: hsl(var(--foreground));
    font-weight: 500;
    background-color: hsl(var(--secondary));
  }

  &.isSmall {
    width: 42px;
    .bar__item_label {
      display: none;
      opacity: 0;
    }
    .nagivation__link_kbd {
      margin-left: auto;
    }
  }
}
</style>
