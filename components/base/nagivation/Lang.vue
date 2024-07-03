<template>
  <BaseNagivationTooltip :disabled="!isSmall">
    <template v-slot:trigger>
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton as-child>
            <div class="bar__item relative" :class="{ isSmall }">
              <span class="bar__item_icon group-hover:text-muted-foreground">
                {{ locale.toLocaleUpperCase() }}
              </span>
              <span class="bar__item_label group-hover:text-muted-foreground">
                {{ $t(`links.lang`) }}
              </span>
            </div>
          </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="start">
          <UiDropdownMenuItem
            v-for="locale in availableLocales"
            :key="locale.code"
            @click="setLocale(locale.code)"
          >
            {{ locale.code.toLocaleUpperCase() }}
          </UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    </template>
    <template v-slot:content>
      <span class=""> {{ $t(`links.lang`) }}&nbsp; </span>
    </template>
  </BaseNagivationTooltip>
</template>
<script setup lang="ts">
import { useNavbarStore } from "~/store/navbar";
const store = useNavbarStore();
const { isSmall } = storeToRefs(store);
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
