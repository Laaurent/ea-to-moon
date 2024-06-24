<template>
  <div class="avatar__container flex items-center gap-2" :class="{ isSmall }">
    <UiAvatar class="navbar__avatar">
      <UiAvatarImage src="" alt="@radix-vue" />
      <UiAvatarFallback class="navbar__avatar_fallback">CN</UiAvatarFallback>
    </UiAvatar>
    <div class="avatar__fullname">
      <span class="avatar__lastname">{{ lastName }}</span>
      <span class="avatar__firstname">{{ firstName }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  firstName: {
    type: String,
    default: "John",
  },
  lastName: {
    type: String,
    default: "Doe",
  },
  size: {
    type: String,
    default: "small",
  },
});
const isSmall = computed(() => props.size !== "large");
</script>
<style scoped lang="scss">
.avatar__container {
  .navbar__avatar {
    font-weight: 500;
    font-size: 1rem;
  }
  .avatar__fullname {
    display: flex;
    gap: 0.25rem;
    .avatar__lastname {
      text-transform: uppercase;
      font-weight: 500;
    }
  }
  &.isSmall .avatar__fullname {
    display: none;
    opacity: 0;
  }
}
</style>
