<template>
  <BaseNagivationTooltip :disabled="!isSmall">
    <template v-slot:trigger>
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton as-child>
            <div class="bar__item relative" :class="{ isSmall }">
              <span class="bar__item_icon" :class="isSmall ? 'mr-5' : ''">
                <Moon
                  class="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Sun
                  class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
              </span>
              <span class="bar__item_label">
                {{ $t(`links.apparence`) }}
              </span>
            </div>
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
