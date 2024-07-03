<template>
  <BaseNagivationTooltip :disabled="!isSmall">
    <template v-slot:trigger>
      <NuxtLink
        @mouseenter="toggleHover"
        @mouseleave="toggleHover"
        :to="localePath(link.path)"
        class="bar__item"
        :class="{ isSmall }"
      >
        <span class="bar__item_icon" :class="isSmall ? 'mr-5' : ''">
          <component :is="link.icon" />
        </span>
        <span class="bar__item_label">
          {{ $t(`links.${link.name}`) }}
        </span>
        <UiKbd
          class="nagivation__link_kbd"
          v-if="(isHover && !isSmall) || showKeys"
        >
          <span class="text-xs">{{ link.shortCut[0] }}</span
          >+&nbsp;{{ link.shortCut[1] }}
        </UiKbd>
      </NuxtLink>
    </template>
    <template v-slot:content>
      <span class="">
        {{ $t(`links.${link.name}`) }}&nbsp;
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
const localePath = useLocalePath();
const router = useRouter();

//PROPS
const props = defineProps({
  link: {
    type: Object as PropType<INavbarLink>,
    required: true,
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
.bar__item {
  &.router-link-active {
    font-weight: 500;
    position: relative;
    border: 1px solid var(--accent);
    color: var(--foreground);

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
    z-index: 50;
    margin-left: auto;
  }
}
</style>
