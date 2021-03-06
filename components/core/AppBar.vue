<template>
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="onClick" />
    <v-spacer />
    <v-alert type="info"> I'm an info alert. </v-alert>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setDrawer']),
    onClick() {
      this.setDrawer(!this.$store.state.drawer)
    },
  },
}
</script>
