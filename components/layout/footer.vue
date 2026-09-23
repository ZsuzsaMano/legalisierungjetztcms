<template>
  <footer><MDC :value="currentContent.content" /></footer>
</template>

<script setup>
const { data: footer } = await useAsyncData("footer", () =>
  queryContent("/footer").findOne(),
);
const { locale } = useI18n();

const currentContent = computed(() => {
  return footer.value?.[locale.value] || footer?.de || {};
});
</script>

<style lang="scss" scoped></style>
