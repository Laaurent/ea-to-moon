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
      <BaseNagivationLink v-for="link in links.top" v-bind="link" :size />
    </div>

    <div class="navbar__menu_bottom">
      <BaseNagivationLink v-for="link in links.bottom" v-bind="link" :size />
    </div>
    <UiSeparator class="my-2" />
    <BaseNagivationAvatar :size="size" />
  </nav>
</template>

<script setup lang="ts">
import { Home, LayoutDashboard, Bolt, PanelLeft } from "lucide-vue-next";

const size = ref("large");

const toggleSize = () => {
  size.value = size.value === "small" ? "large" : "small";
};

const links = {
  top: [
    { to: "/", icon: Home, label: "Home", shortCut: ["⌘", "1"] },
    {
      to: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      shortCut: ["⌘", "2"],
    },
  ],
  bottom: [
    { to: "/settings", icon: Bolt, label: "Settings", shortCut: ["⌘", "9"] },
  ],
};
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
