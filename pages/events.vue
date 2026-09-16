<template>
  <main id="main" class="typography">
    <span>{{ events.title }}</span>
    <MDC :value="events.content" />
  </main>
</template>

<script setup>
const { data: events } = reactive(
  await useAsyncData("events", () => queryContent("/pages/events").findOne()),
);
</script>

<style lang="scss" scoped>
main {
  display: grid;
  justify-items: center;
  align-items: center;

  :deep(div) {
    max-width: 500px;
  }
}
</style>
