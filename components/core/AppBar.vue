<template>
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="onClick" />
    <v-spacer />
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
