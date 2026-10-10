<template>
  <section class="content-box letter">
    <h2>{{ currentContent.title }}</h2>
    <MDC :value="currentContent.content" />
  </section>
  <Signatures :signatureTitle="currentContent.signtitle" />
</template>

<script setup>
import Signatures from "~/components/signatures.vue";

const { currentContent } = await usePageContent("/letter");
</script>

<style lang="scss" scoped>
.letter {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
