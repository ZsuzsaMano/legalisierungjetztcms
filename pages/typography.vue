<template>
  <main id="main" class="typography">
    <span>{{ typography.title }}</span>
    <MDC :value="typography.content" />
  </main>
</template>

<script setup>
const { data: typography } = reactive(
  await useAsyncData("typography", () =>
    queryContent("/pages/typography").findOne(),
  ),
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
