export const useProjectStore = defineStore("project", () => {
  // state
  const open = ref<{
    [key: string]: boolean;
  }>({
    folders: true,
    reports: true,
  });

  function toggleOpen(key: string, value?: boolean) {
    if (value !== undefined) open.value[key] = value;
    else open.value[key] = !open.value[key];
  }
  return {
    open,
    toggleOpen,
  };
});
