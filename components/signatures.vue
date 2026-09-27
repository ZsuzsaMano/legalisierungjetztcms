<template lang="">
  <section class="content-box">
    <h3>{{ signatureTitle }}</h3>
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
  return (signatures.value || [])
    .map((signature) => signature[locale.value] || signature.de || {})
    .sort((a, b) =>
      (a.organisation || "").localeCompare(b.organisation || "", locale.value, {
        sensitivity: "base",
      }),
    );
});

const props = defineProps({
  signatureTitle: {
    type: String,
  },
});
</script>
<style scoped>
ul {
  column-width: 15rem;
  list-style-position: inside;
  padding: 0;
}

li {
  list-style: none;
  margin-bottom: 1rem;
}
</style>
