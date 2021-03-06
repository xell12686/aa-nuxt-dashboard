<template>
  <v-app>
    <NavDrawer />
    <AppBar />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavDrawer from '~/components/core/NavDrawer'
import AppBar from '~/components/core/AppBar'

export default {
  components: {
    NavDrawer,
    AppBar,
  },
}
</script>

<style lang="scss">
.v-main__wrap {
  background-color: white;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    background-color: $primary;
    opacity: 0.3;
  }
  .theme--dark & {
    &:before {
      background-color: $darkPrimary;
      -webkit-clip-path: polygon(100% 0, 0% 100%, 0 0);
      clip-path: polygon(100% 0, 0% 100%, 0 0);
      opacity: 1;
    }
  }
}
</style>
