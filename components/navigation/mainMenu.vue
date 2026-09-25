<template>
  <div id="main-menu">
    <div
      id="mobile-menu__toggle-button"
      @click="toggleMobileMenu()"
      :class="{ mobileMenuOpen: mobileMenuActive }"
    >
      <span>&#x2630;</span>
    </div>

    <nav :class="{ mobileMenuOpen: mobileMenuActive }">
      <menu class="main-menu__basic">
        <NuxtLink to="/" class="menu-item" prefetch> Home </NuxtLink>
        <NuxtLink
          v-for="(isActive, path) in currentContent"
          :key="path"
          :to="`/${path}`"
          v-show="isActive"
          class="menu-item"
          prefetch
        >
          {{ path.charAt(0).toUpperCase() + path.slice(1) }}
        </NuxtLink>
        <NavigationLocale />
        <NuxtLink
          :to="currentHeaderContent.url"
          class="menu-item"
          style="font-size: small"
        >
          {{ currentHeaderContent.text }}
          <Icon name="material-symbols:arrow-outward-rounded" size="1.2rem" />
        </NuxtLink>
      </menu>
    </nav>
  </div>
</template>

<script setup>
const mobileMenuActive = ref(false);
const route = useRoute();
watch(route, () => {
  mobileMenuActive.value = false;
});

const { data: paths, error: pathsError } = await useAsyncData("paths", () =>
  queryContent("/paths").findOne(),
);

const { data: header } = await useAsyncData("header", () =>
  queryContent("/header").findOne(),
);

const { locale } = useI18n();

const currentContent = computed(() => {
  return paths.value?.[locale.value] || paths.value?.de || {};
});

const currentHeaderContent = computed(() => {
  return header.value?.[locale.value] || header.value?.de || {};
});

if (pathsError.value) {
  console.error("Failed to load paths", pathsError.value);
}

function toggleMobileMenu() {
  mobileMenuActive.value = !mobileMenuActive.value;
}

watch(
  // closes menu on route change
  () => route.path,
  () => {
    mobileMenuActive.value = false;
  },
);
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  @include media(xsm) {
    padding-top: 8em; // pushes item below 'header' (toggle-button span:before)
  }
}

.main-menu__basic {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin: 0;
  padding: 0;

  @include media(xsm) {
    position: relative;
    display: block;
    height: 100%;
    margin: 0;
    padding-left: 0;
  }

  .menu-item {
    cursor: pointer;
    padding: 0rem 0.6rem;
    display: inline-block;
    color: $grey;
    transition: $transition1;
    &:hover {
      color: $base-color;
    }
    &.active {
      color: $base-color;
      font-weight: bold;
    }

    @include media(xsm) {
      &.router-link-active {
        outline: 0.3em solid var(--hover-background-color);
      }
    }
  }
}

// toggle states/ mobile

nav {
  @include media(xsm) {
    display: none;
    menu {
      display: block !important;
    }
  }
}

nav.mobileMenuOpen {
  position: fixed;
  display: grid;
  grid-template-rows: auto max-content 1fr;
  height: 100vh;
  width: max-content;
  top: 0;
  right: 0;
  background: $white;
  &::before {
    position: fixed;
    content: "";
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(0.3em);
    inset: 0;
  }
}

#mobile-menu__toggle-button {
  display: none;
  cursor: pointer;
  @include media(xsm) {
    position: absolute;
    z-index: 99;
    display: block;
    font-size: 0.8em;
    text-align: center;
    width: max-content;
    margin-inline: auto;
    justify-self: center;
    padding: $spacing1;
    margin-top: $spacing0;
    right: 0;
  }
  span {
    font-size: $font-size2;
    display: block;
  }
}

#mobile-menu__toggle-button.mobileMenuOpen {
  position: fixed;

  span::after {
    display: block;
  }
}

#main-menu {
  @include media(xsm) {
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
  }
}
</style>
