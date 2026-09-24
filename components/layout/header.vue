<template>
  <header id="header">
    <LayoutLogo />
    <NavigationMainMenu />
    <NavigationLocale />
  </header>
</template>

<style lang="scss" scoped>
#header {
  position: relative;
  display: flex;
  justify-content: space-between;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.1em;
    top: 100%;
    background-image: linear-gradient(90deg, $base-color, $dark-grey);
  }
  @include media(xsm) {
    display: block;
    padding: $spacing1 0;

    #locale-toggle {
      display: none;
    }
  }
}

#header__logo {
  grid-column: 1;
  grid-row: 1;
}

#main-menu {
  grid-column: 2;
  grid-row: 1;
  align-self: center;
  justify-self: center;
}
</style>
