<template>
  <section class="mb-4">
    <header class="h-10 flex items-center gap-2 text-muted-foreground my-2">
      <section class="flex items-center gap-1">
        <span class="text-sm font-medium">
          {{ $t(`projects.${ressource}.title`) }}&nbsp;
          <UiBadge v-if="count" variant="secondary">{{ count }}</UiBadge>
        </span>
        <UiButton @click="toggleOpen(ressource)" variant="ghost" size="icon">
          <Transition name="rotate" mode="out-in">
            <ChevronUp v-if="open[ressource]" class="h-4 w-4" />
            <ChevronDown v-else class="h-4 w-4" />
          </Transition>
        </UiButton>
      </section>
      <UiButton v-if="newRessource" class="ml-auto">
        <Plus class="h-4 w-4 mr-2" />
        <span>{{ $t(`projects.${ressource}.create`) }}</span>
      </UiButton>
    </header>
    <Transition name="fadeHeight" mode="out-in">
      <section v-if="open[ressource]" class="outer">
        <slot class="inner"></slot>
      </section>
    </Transition>
  </section>
</template>
<script setup lang="ts">
import { ChevronUp, ChevronDown, Plus } from "lucide-vue-next";
import { useProjectStore } from "~/store/project";

const props = defineProps({
  ressource: {
    type: String as PropType<"ressources" | "folders" | "reports">,
    required: true,
    default: "ressources",
  },
  count: {
    type: Number,
    required: false,
    default: null,
  },
  newRessource: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const { ressource, count, newRessource } = toRefs(props);

//Store
const store = useProjectStore();
const { open } = storeToRefs(store);
const { toggleOpen } = store;
</script>
<style lang="scss" scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: transform 0.25s ease-in-out;
}
.rotate-leave-to {
  transform: rotate(180deg);
}
.rotate-leave-from {
  opacity: 0;
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.25s ease-in-out;
  max-height: 230px;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
