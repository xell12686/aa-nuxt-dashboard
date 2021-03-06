<template>
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="onClick" />
    <v-spacer />
    <TopToolBar />
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
import TopToolBar from '../toolbars/TopToolBar'

export default {
  components: {
    TopToolBar,
  },
  methods: {
    ...mapMutations(['setDrawer']),
    onClick() {
      this.setDrawer(!this.$store.state.drawer)
    },
  },
}
</script>
