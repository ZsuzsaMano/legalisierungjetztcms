<template>
  <main id="main" class="typography">
    <h3>{{ letter.title }}</h3>
    <MDC :value="letter.content" />
  </main>
</template>

<script setup>
const { data: letter } = reactive(
  await useAsyncData("letter", () => queryContent("/pages/letter").findOne()),
);
</script>

<style lang="scss" scoped>
main {
  margin: auto;
  max-width: 50rem;
}
</style>
