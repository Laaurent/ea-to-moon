<template>
  <div
    class="flex items-start gap-2 group cursor-pointer min-w-80"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div :class="cn(folderVariants({ variant }), 'flex flex-col')">
      <component v-if="icon" :is="icon" class="h-6 w-6" />
      <component
        v-if="!icon"
        :is="hover ? FolderOpen : Folder"
        class="h-6 w-6"
      />
    </div>
    <div class="flex flex-col justify-start">
      <span class="font-medium">{{ title }}</span>
      <span
        v-if="description"
        class="text-xs font-secondary text-muted-foreground"
      >
        {{ description }}
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { Folder, FolderOpen } from "lucide-vue-next";
import { cn } from "~/lib/utils";

const folderVariants = cva("rounded p-2", {
  variants: {
    variant: {
      default:
        "bg-muted border border-border text-muted-foreground hover:text-primary",
      secondary:
        "bg-background text-border group-hover:text-muted-foreground border border-border group-hover:border-muted-foreground border-dashed",
    },
  },
});
type ButtonVariants = VariantProps<typeof folderVariants>;

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  icon: {
    required: false,
  },
  variant: {
    required: false,
    type: String as PropType<ButtonVariants["variant"]>,
    default: "default",
  },
});

const hover = ref(false);
</script>
, type VariantProps
