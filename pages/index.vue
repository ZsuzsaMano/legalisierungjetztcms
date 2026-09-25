<template>
  <main id="main" class="content-box">
    <section class="text-box">
      <h1>{{ currentContent.title }}</h1>
      <MDC :value="currentContent.content" />
      <NuxtLink to="/letter" class="button">
        {{ currentContent.button }}
        <Icon name="material-symbols:arrow-outward-rounded" size="1.2rem" />
      </NuxtLink>
    </section>
    <section>
      <img :src="currentContent.Image" alt="men with flag" />
    </section>
  </main>
</template>

<script setup>
const { data: home } = reactive(
  await useAsyncData("home", () => queryContent("/home").findOne()),
);

const { locale } = useI18n();

const currentContent = computed(() => {
  return home?.[locale.value] || home?.de || {};
});

setSeoHead(home[locale.value].SEOmetaData);
</script>

<style lang="scss" scoped>
main {
  display: flex;
  gap: 1rem;
  @media (max-width: 599px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
  .text-box {
    padding: 0 2rem;
    .button {
      margin-top: 2rem;
    }
  }

  // assets/scss/mixins
  @include fade-in;

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
