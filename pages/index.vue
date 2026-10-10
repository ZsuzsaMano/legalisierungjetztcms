<template>
  <section id="main" class="content-box">
    <article class="text-box">
      <h2>{{ currentContent.title }}</h2>
      <MDC :value="currentContent.content" />
      <NuxtLink :to="localePath('/letter')" class="button">
        {{ currentContent.button }}

        <Icon name="material-symbols:arrow-outward-rounded" size="1.2rem" />
      </NuxtLink>
    </article>
    <div>
      <img :src="currentContent.Image" alt="men with flag" />
    </div>
  </section>
  <section v-if="pressArticles?.length" class="content-box">
    <h3>Press</h3>
    <div class="press-articles">
      <a
        v-for="article in pressArticles"
        :key="article._path"
        class="article-preview"
        :href="article.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          v-if="article.previewImage"
          :src="article.previewImage"
          :alt="
            article.previewImageAlt || article.previewTitle || article.title
          "
        />
        <span class="preview-copy">
          <small>{{ article.publisher }}</small>
          <strong>{{ article.previewTitle || article.title }}</strong>
          <span v-if="article.previewDescription">{{
            article.previewDescription
          }}</span>
          <time v-if="article.date" :datetime="article.date">{{
            article.date
          }}</time>
        </span>
        <Icon name="material-symbols:arrow-outward-rounded" size="1.2rem" />
      </a>
    </div>
  </section>
  <section v-if="events?.length" class="content-box">
    <h3>Events</h3>
    <ul>
      <li v-for="event in events" :key="event._path">
        <h4>{{ event.title }}</h4>
        <time v-if="event.date" :datetime="event.date">{{ event.date }}</time>
        <p v-if="event.place">{{ event.place }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { currentContent } = await usePageContent("home");
const { data: pressArticles } = await useAsyncData("home-press-articles", () =>
  $fetch("/api/press-previews"),
);
const { data: events } = await useAsyncData("home-events", () =>
  queryContent("/events").where({ _extension: "md" }).sort({ date: 1 }).find(),
);
const localePath = useLocalePath();
setSeoHead(currentContent.value.SEOmetaData);
</script>

<style lang="scss" scoped>
#main {
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

.press-articles {
  display: grid;
  width: 100%;
}

.article-preview {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid currentColor;
  color: inherit;
  text-decoration: none;

  > img {
    width: 10rem;
    height: 6.5rem;
    flex: 0 0 auto;
    object-fit: cover;
  }

  .preview-copy {
    display: grid;
    flex: 1;
    min-width: 0;
    gap: 0.35rem;
  }

  small,
  time {
    font-size: 0.875rem;
  }

  &:hover strong,
  &:focus-visible strong {
    text-decoration: underline;
  }
}

@media (max-width: 599px) {
  .article-preview > img {
    width: 6rem;
    height: 5rem;
  }
}
</style>
