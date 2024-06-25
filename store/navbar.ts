import { Home, LayoutDashboard, Bolt } from "lucide-vue-next";
import type { INavbarLink } from "~/types/navigation";
import { shallowRef } from "vue";

export const useNavbarStore = defineStore("navbar", () => {
  // LINKS
  const links = shallowRef<INavbarLink[]>([]);
  function setLinks(value: INavbarLink[]) {
    links.value = value;
  }

  // NAVBAR SIZE
  const size = ref<"small" | "large">("small");

  function toggleSize(value?: "small" | "large") {
    if (value) size.value = value;
    else size.value = size.value === "small" ? "large" : "small";
  }

  const isSmall = computed(() => size.value !== "large");

  // KEYS PRESSED
  const keysPressed = ref<string[]>([]);
  const showKeys = ref<boolean>(false);

  function toggleShowKeys(value?: boolean) {
    if (value !== undefined) showKeys.value = value;
    else showKeys.value = !showKeys.value;
  }

  // COMMAND KEYS
  const showCommand = ref<boolean>(false);

  function toggleShowCommand(value?: boolean) {
    if (value !== undefined) showCommand.value = value;
    else showCommand.value = !showCommand.value;
  }

  return {
    links,
    setLinks,
    size,
    toggleSize,
    isSmall,
    showKeys,
    keysPressed,
    toggleShowKeys,
    showCommand,
    toggleShowCommand,
  };
});
