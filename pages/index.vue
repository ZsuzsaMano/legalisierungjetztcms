<template>
  <main id="main" class="home">
    <MDC :value="currentContent.content" />
  </main>
</template>

<script setup>
const { data: home } = reactive(
  await useAsyncData("home", () => queryContent("/home").findOne()),
);

const { locale } = useI18n();

const currentContent = computed(() => {
  return home?.[locale.value] || home?.de || {};
});

setSeoHead(home[locale.value].SEOmetaData);
</script>

<style lang="scss" scoped>
main {
  // assets/scss/mixins
  @include fade-in;
}
</style>
