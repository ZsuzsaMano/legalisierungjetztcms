<script setup>
const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template lang="">
  <nav role="radiogroup" aria-label="Choose your language">
    <NuxtLink
      class="button-locale"
      v-for="l in locales"
      :to="switchLocalePath(l.code)"
      :key="l.code"
      :class="{ active: l.code == locale }"
      :aria-checked="l.code === locale"
      role="radio"
      :aria-label="`${l.name || l.code.toUpperCase()} ${l.code === locale ? '(current)' : ''}`"
    >
      {{ l.code.toUpperCase() }}
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
.button-locale {
  padding: 0.5rem;
  display: inline-block;
  margin: 0.5rem 0px;
  color: $grey;
  &:hover {
    color: $base-color;
  }
  &.active {
    color: $base-color;
    font-weight: bold;
  }
}
</style>
