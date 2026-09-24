<template>
  <main id="main" class="letter">
    <h3>{{ currentContent.title }}</h3>
    <MDC :value="currentContent.content" />
  </main>
</template>

<script setup>
const { data: letter } = reactive(
  await useAsyncData("letter", () => queryContent("letter").findOne()),
);

const { locale } = useI18n();

const currentContent = computed(() => {
  return letter?.[locale.value] || letter?.de || {};
});
</script>

<style lang="scss" scoped>
main {
  margin: auto;
  max-width: 50rem;
}
</style>
