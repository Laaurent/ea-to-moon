<template>
  <nav class="navbar__container">
    <div class="navbar__header h-16 flex items-center">
      <UiButton @click="toggleSize()" variant="ghost" size="icon">
        <PanelLeft class="w-4 h-4" />
      </UiButton>
    </div>
    <UiSeparator class="my-2" />
    <div class="navbar__menu">
      <BaseNagivationCommand :size class="w-full mb-2" />
      <BaseNagivationLink v-for="link in topLinks" :link :size />
    </div>

    <div class="navbar__menu_bottom">
      <BaseNagivationLink v-for="link in bottomLinks" :link :size />
    </div>
    <UiSeparator class="my-2" />
    <BaseNagivationAvatar :size />
  </nav>
</template>

<script setup lang="ts">
import { useWindowSize, whenever, useMagicKeys } from "@vueuse/core";
import { PanelLeft } from "lucide-vue-next";
import { Home, LayoutDashboard, Bolt } from "lucide-vue-next";
import { useNavbarStore } from "~/store/navbar";
import type { INavbarLink } from "~/types/navigation";

const { width } = useWindowSize();
const { Ctrl, Meta } = useMagicKeys();

const links = ref<INavbarLink[]>([
  {
    name: "dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
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
