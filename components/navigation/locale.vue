<script setup>
const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template lang="">
  <section role="radiogroup" aria-label="Choose your language">
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
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  margin: 0rem 2rem;
}
.button-locale {
  display: inline-block;
  color: $grey;
  font-size: small;
  padding: 0.3rem;
  &:hover {
    color: $base-color;
  }
  &.active {
    color: $base-color;
    font-weight: bold;
  }
}
</style>
