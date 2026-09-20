<template>
  <main id="main" class="gallery">
    <h2>{{ gallery.title }}</h2>
  </main>
</template>

<script setup>
const { data: gallery } = reactive(
  await useAsyncData("gallery", () => queryContent("/pages/gallery").findOne()),
);
</script>
