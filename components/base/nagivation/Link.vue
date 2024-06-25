<template>
  <BaseNagivationTooltip :disabled="!isSmall">
    <template v-slot:trigger>
      <NuxtLink
        @mouseenter="toggleHover"
        @mouseleave="toggleHover"
        :to="link.path"
        class="navigation__link group flex hover:bg-secondary text-muted-foreground hover:text-muted-foreground hover:font-medium"
        :class="{ isSmall }"
      >
        <span
          class="navigation__link_icon text-muted-foreground group-hover:text-muted-foreground"
          :class="isSmall ? 'mr-5' : ''"
        >
          <component :is="link.icon" />
        </span>
        <span
          class="navigation__link_label text-muted-foreground group-hover:text-muted-foreground"
        >
          {{ link.name }}
        </span>
        <UiKbd
          class="nagivation__link_kbd z-50 ml-10"
          v-if="(isHover && !isSmall) || showKeys"
        >
          <span class="text-xs">{{ link.shortCut[0] }}</span
          >+&nbsp;{{ link.shortCut[1] }}
        </UiKbd>
      </NuxtLink>
    </template>
    <template v-slot:content>
      <span class="">
        {{ link.name }}&nbsp;
        <UiKbd>
          <span class="text-xs">{{ link.shortCut[0] }}</span>
          &nbsp;{{ link.shortCut[1] }}
        </UiKbd>
      </span>
    </template>
  </BaseNagivationTooltip>
</template>

<script setup lang="ts">
import { useNavbarStore } from "~/store/navbar";
import { useMagicKeys } from "@vueuse/core";
import type { INavbarLink } from "~/types/navigation";
const router = useRouter();

//PROPS
const props = defineProps({
  link: {
    type: Object as PropType<INavbarLink>,
    required: true,
  },
  size: {
    type: String,
    default: "small",
  },
});
const { link } = reactive(props);
const isHover = ref(false);

//STORE
const store = useNavbarStore();
const { showKeys, isSmall } = storeToRefs(store);
const { toggleShowKeys } = store;

//KEY PRESSED
const { Ctrl, Meta, current } = useMagicKeys();
const keys = computed(() => Array.from(current));

const toggleHover = () => {
  isHover.value = !isHover.value;
};

watch([Ctrl, Meta, current], (v) => {
  if (v && keys.value.includes(link.shortCut[1])) {
    toggleShowKeys(false);
    router.push(link.path);
  }
});
</script>

<style scoped lang="scss">
.navigation__link {
  cursor: pointer;
  width: 440px;
  height: 42px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: var(--radius);

  transition: $transition_all;
  .navigation__link_icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.isSmall {
    width: 42px;
    .navigation__link_label,
    .navigation__link_dot {
      display: none;
      opacity: 0;
    }
  }

  &.router-link-active {
    font-weight: 500;
    position: relative;
    border: 1px solid var(--accent);

    .navigation__link_icon,
    .navigation__link_label {
      color: var(--foreground);
    }
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      inset: 0;
      opacity: 0.2;
      border-radius: var(--radius);
      box-shadow: 0 0 1em 0em var(--accent);
      /*  transition: $transition_all */
    }
    &:hover {
      &:after {
        opacity: 0.4;
        box-shadow: 0 0 1em 0em var(--accent);
      }
    }
  }
  .nagivation__link_kbd {
    margin-left: auto;
  }
}
</style>
