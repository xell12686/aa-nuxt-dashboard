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
import NavDrawer from '../components/core/NavDrawer'
import AppBar from '../components/core/AppBar'

export default {
  components: {
    NavDrawer,
    AppBar,
  },
}
</script>
