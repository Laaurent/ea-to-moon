<template>
  <BaseNagivationTooltip :disabled="!isSmall">
    <template v-slot:trigger>
      <NuxtLink
        @mouseenter="toggleHover"
        @mouseleave="toggleHover"
        :to="to"
        class="navigation__link group flex hover:bg-secondary text-muted-foreground hover:text-muted-foreground hover:font-medium"
        :class="{ isSmall }"
      >
        <span
          class="navigation__link_icon text-muted-foreground group-hover:text-muted-foreground mr-5"
        >
          <component :is="icon" />
        </span>
        <span
          class="navigation__link_label text-muted-foreground group-hover:text-muted-foreground"
        >
          {{ label }}
        </span>
        <UiKbd
          class="nagivation__link_kbd z-50 ml-10"
          v-if="(isHover && !isSmall) || showShortcut"
        >
          <span class="text-xs">{{ shortCut[0] }}</span
          >+&nbsp;{{ shortCut[1] }}
        </UiKbd>
      </NuxtLink>
    </template>
    <template v-slot:content>
      <span class="">
        {{ label }}&nbsp;
        <UiKbd>
          <span class="text-xs">{{ shortCut[0] }}</span>
          &nbsp;{{ shortCut[1] }}
        </UiKbd>
      </span>
    </template>
  </BaseNagivationTooltip>
</template>

<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";

/* const keysPressed = inject("keysPressed"); */

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  icon: {},
  label: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "small",
  },
  shortCut: {
    type: Array as PropType<string[]>,
    default: ["⌘", "1"],
  },
});
const router = useRouter();

const { shortCut, to } = toRefs(props);
const isHover = ref(false);
const showShortcut = ref(false);

const toggleHover = () => {
  isHover.value = !isHover.value;
};
const isSmall = computed(() => props.size !== "large");

const { Meta, Ctrl } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === shortCut.value[1] && (e.metaKey || e.ctrlKey))
      router.push(to.value);
    if (e.metaKey || e.ctrlKey) e.preventDefault();
  },
});

watch([Meta, Ctrl], (v) => {
  handleOpenChange();
});

function handleOpenChange() {
  showShortcut.value = !showShortcut.value;
}
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
