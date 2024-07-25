<template>
  <main class="layout__dashboard bg-muted">
    <div>
      <BaseNagivationBar />
    </div>
    <div class="w-full">
      <div
        class="relative layout__dashboard_child h-full bg-background flex flex-col gap-4 justify-start"
      >
        <!--  <BaseHeaderBar class="layout__dashboard_child_header" /> -->
        <slot />
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
.layout__dashboard {
  padding: $dashboard_padding;
  height: 100%;
  display: flex;
  gap: $dashboard_padding;
  .layout__dashboard_child_header {
    padding: calc($dashboard_padding/2) 0;
    height: 40px !important;
  }
  .layout__dashboard_child {
    flex: 1;
    border-radius: var(--radius);
    padding: $dashboard_padding;
  }
}
</style>
