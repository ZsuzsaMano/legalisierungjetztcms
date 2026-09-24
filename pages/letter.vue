<template>
  <main id="main" class="content-box">
    <h2>{{ currentContent.title }}</h2>
    <MDC :value="currentContent.content" />
  </main>
</template>

<script setup>
const { data: letter } = reactive(
  await useAsyncData("letter", () => queryContent("letter").findOne()),
);

const { locale } = useI18n();

const currentContent = computed(() => {
  return letter?.[locale.value] || letter?.value.de || {};
});
</script>

<style lang="scss" scoped></style>
