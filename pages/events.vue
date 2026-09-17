<template>
  <main id="main" class="events">
    <span>{{ events.title }}</span>

    <span>{{ events.subTitle1 }}</span>
    <MDC :value="events.content1" />

    <span>{{ events.subTitle2 }}</span>
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
