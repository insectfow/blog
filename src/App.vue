<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/bana">Bana</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: 'nanum-squarer';
  src: url(@/assets/fonts/nanumsquarer.woff2) format("woff2");
}

html, body, nav, div, ul, li, ol, p, span, input, a, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-family: 'nanum-squarer';
  font-weight: normal;
}

ul, ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

a, a:focus, a:hover {
  text-decoration: none;
}

</style>
