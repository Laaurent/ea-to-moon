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
import { useNavbarStore } from "~/store/navbar";

const { width } = useWindowSize();
const { Ctrl, Meta } = useMagicKeys();

// PROPS
const topLinks = computed(() =>
  links.value.filter((link) => link.position === "top")
);
const bottomLinks = computed(() =>
  links.value.filter((link) => link.position === "bottom")
);

// STORE
const store = useNavbarStore();
const { links, size } = storeToRefs(store);
const { toggleSize, toggleShowKeys } = store;

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
