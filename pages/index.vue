<template>
  <main id="main" class="home">
    <MDC :value="home.en.content" />
  </main>
</template>

<script setup>
const { data: home } = reactive(
  await useAsyncData("home", () => queryContent("/home").findOne()),
);

setSeoHead(home.en.SEOmetaData);
</script>

<style lang="scss" scoped>
main {
  // assets/scss/mixins
  @include fade-in;
}
</style>
