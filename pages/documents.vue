<template>
  <main id="main" class="gallery">
    <h2>{{ documents.title }}</h2>
  </main>
</template>

<script setup>
const { data: documents } = await usePageContent("/documents");
</script>
