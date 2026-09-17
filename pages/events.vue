<template>
  <main id="main" class="events">
    <h2>{{ events.title }}</h2>

    <h3>{{ events.subTitle1 }}</h3>
    <MDC :value="events.content1" />

    <h3>{{ events.subTitle2 }}</h3>
    <MDC :value="events.content2" />
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
