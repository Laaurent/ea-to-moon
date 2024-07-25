<template>
  <div class="absolute bottom-2 left-0 z-50 h-13 w-full flex justify-center">
    <div
      @mouseover="expandDock"
      @mouseout="collapseDock"
      class="dock cursor-pointer overflow-hidden backdrop-blur-sm bg-card/70 rounded border border-border p-1 flex gap-2 shadow-lg ring-1 ring-primary/10 transition-all duration-200 ease-out"
      :class="classes"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  expanded: {
    type: Boolean,
    default: true,
  },
});

watch(props, () => {
  if (props.expanded) expandDock();
  else collapseDock();
});

const { expanded } = toRefs(props);

const classes = ref([""]);

const expandDock = () => {
  expanded.value = true;
  classes.value = ["expanded"];
};
const collapseDock = () => {
  expanded.value = false;
  classes.value = [""];
};
</script>
<style scoped lang="scss">
.dock {
  background-color: hsl(var(--primary));
  height: 0.5rem;
  > * {
    opacity: 0;
  }
}
.expanded {
  background-color: hsl(var(--primary-foreground));
  height: 3rem;
  > * {
    opacity: 1;
  }
}
</style>
