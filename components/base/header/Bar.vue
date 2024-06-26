<template>
  <div class="flex justify-between items-center">
    <BaseHeaderBreadCrumb />
    <div class="flex items-center">
      <!-- LANG -->
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton variant="ghost" size="icon">
            {{ locale.toLocaleUpperCase() }}
            <span class="sr-only">Lang</span>
          </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="end">
          <UiDropdownMenuItem
            v-for="locale in availableLocales"
            :key="locale.code"
            @click="setLocale(locale.code)"
          >
            {{ locale.code.toLocaleUpperCase() }}
          </UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
      <!-- THEME -->
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton variant="ghost" size="icon">
            <Moon
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Sun
              class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
          </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="end">
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const colorMode = useColorMode();
</script>
