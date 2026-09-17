<template>
  <main id="main" class="events">
    <span>{{ events.title }}</span>
    <MDC :value="events.subTitle1" />
    <MDC :value="events.content1" />
    <MDC :value="events.subTitle2" />
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
