<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-vue-next";
const localPath = useLocalePath();
const route = useRoute();

console.log(route);
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink :href="localPath('/')">
          <Home class="h-4 w-4" />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <template v-if="route.name !== 'index'">
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <NuxtLink :to="localPath(`/${route.name}`)">
              {{ $t(`links.${route.name}`) }}
            </NuxtLink>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
