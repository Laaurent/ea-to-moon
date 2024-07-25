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

  //SORTING
  const sortOptions = ref<string[]>([
    "name_asc",
    "name_desc",
    "created_at_asc",
    "created_at_desc",
  ]);

  const selectedSort = ref(sortOptions.value[0]);

  //FILTERS
  const params = ref<any>({
    name: {
      value: "",
    },
    sort: {
      value: "name",
    },
  });

  return {
    open,
    toggleOpen,
    params,
    selectedSort,
    sortOptions,
  };
});
