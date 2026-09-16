<template>
  <main id="main" class="home">
    <MDC :value="home.content" />
  </main>
</template>

<script setup>
const { data: home } = reactive(
  await useAsyncData("home", () => queryContent("/pages/home").findOne()),
);

setSeoHead(home.SEOmetaData);
</script>

<style lang="scss" scoped>
main {
  // assets/scss/mixins
  @include fade-in;
}
</style>
