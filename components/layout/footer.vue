<template>
  <footer class="content-box">
    <section>
      <h3>{{ currentContent.title3 }}</h3>
      <MDC :value="currentContent.content3" />

      <NavigationLocale />
    </section>
    <section>
      <h6>{{ currentContent.title }}</h6>
      <MDC :value="currentContent.content" />
    </section>
    <section>
      <h6>{{ currentContent.title2 }}</h6>
      <MDC :value="currentContent.content2" />
    </section>
  </footer>
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

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: $grey;
  section {
    max-width: 25rem;
  }
}
</style>
