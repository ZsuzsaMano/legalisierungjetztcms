<template>
  <main id="main" class="press">
    <h2>{{ press.title }}</h2>

    <h3>{{ press.subTitle1 }}</h3>
    <MDC :value="press.content1" />

    <h3>{{ press.subTitle2 }}</h3>
    <MDC :value="press.content2" />
  </main>
</template>

<script setup>
const { data: press } = reactive(
  await useAsyncData("press", () => queryContent("/pages/press").findOne()),
);
</script>

<style lang="scss" scoped>
main {
  display: grid;
  justify-items: center;
  align-items: center;

  :deep(div) {
    max-width: 500px;
  }
}
</style>
