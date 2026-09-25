<template lang="">
  <section class="content-box">
    <ul>
      <li v-for="signature in currentSignatures" :key="signature.organisation">
        {{ signature.organisation }}
      </li>
    </ul>
  </section>
</template>
<script setup>
const { data: signatures } = await useAsyncData("signatures", () =>
  queryContent("/signatures").where({ _extension: "md" }).find(),
);

const { locale } = useI18n();

const currentSignatures = computed(() => {
  return (
    signatures.value?.map(
      (signature) => signature[locale.value] || signature.de || {},
    ) || []
  );
});
</script>
<style scoped>
ul {
  display: flex;
}

li {
  margin: 2rem;
  list-style: none;
}
</style>
