<template>
  <BaseNagivationTooltip :disabled="!isSmall">
    <template v-slot:trigger>
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton
            variant="ghost"
            size="icon"
            class="relative w-full justify-start px-2 gap-4"
            :class="{ isSmall }"
          >
            <span
              class="h-6 w-6 navigation__link_icon text-muted-foreground group-hover:text-muted-foreground"
              :class="isSmall ? 'mr-5' : ''"
            >
              <Moon
                class="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <Sun
                class="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
            </span>
            <span
              class="navigation__label text-muted-foreground group-hover:text-muted-foreground"
            >
              {{ $t(`links.apparence`) }}
            </span>
          </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="start" class="w-full">
          <UiDropdownMenuItem @click="colorMode.preference = 'light'">
            Light
          </UiDropdownMenuItem>
          <UiDropdownMenuItem @click="colorMode.preference = 'dark'">
            Dark
          </UiDropdownMenuItem>
          <UiDropdownMenuItem @click="colorMode.preference = 'system'">
            System
          </UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    </template>
    <template v-slot:content>
      <span class=""> {{ $t(`links.apparence`) }}&nbsp; </span>
    </template>
  </BaseNagivationTooltip>
</template>
<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { useNavbarStore } from "~/store/navbar";
const colorMode = useColorMode();

const store = useNavbarStore();
const { isSmall } = storeToRefs(store);
</script>
<style scoped lang="scss">
.isSmall {
  width: 42px;
  .navigation__label {
    display: none;
    opacity: 0;
  }
}
</style>
