<template>
  <div class="page">
    <div
      class="layout-wrapper"
      :class="{ '--firstVisitAnimation': firstVisit }"
    >
      <LayoutHeader />
      <div class="page-wrapper default">
        <slot />
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
// initiallize 'firstVisit' state => changed via watch
const firstVisit = useState("firstVisit", () =>
  route.path === "/" ? true : false,
);

watch(
  () => route.fullPath,
  () => {
    firstVisit.value = false;
  },
);
</script>

<style scoped>
.page {
  background-color: #fff7fd;
}
</style>
