<template>
  <main class="layout__dashboard">
    <div>
      <BaseNagivationBar />
    </div>
    <div class="w-full flex flex-col">
      <BaseHeaderBar class="layout__dashboard_child_header h-16 mb-4" />
      <div class="layout__dashboard_child h-full bg-muted">
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
    padding: $dashboard_padding 0;
  }
  .layout__dashboard_child {
    flex: 1;
    border-radius: var(--radius);
    padding: $dashboard_padding;
  }
}
</style>
