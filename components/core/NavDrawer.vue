<template>
  <v-navigation-drawer v-model="toggleValue" fixed app overlay-color="primary">
    <v-card class="AvatarCard text-center py-4" outlined>
      <v-avatar class="mx-auto d-block rounded-circle" size="100">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" />
      </v-avatar>
      <v-card-text class="text-center">
        <v-chip class="ma-2" color="transparent" label>
          <v-icon left>mdi-lock</v-icon>
          <h4 class="font-weight-light">Watson Joyce</h4>
        </v-chip>

        <p class="font-weight-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          accumsan erat eu tellus viverra viverra a nec massa.
        </p>

        <v-btn color="success">Follow</v-btn>
      </v-card-text>
    </v-card>

    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-apps',
        title: 'Dashboard',
        to: '/',
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire',
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Admin',
        to: '/admin',
      },
    ],
    lightBg: 'img/light-bg.jpg',
    darkBg: 'img/dark-bg.jpg',
  }),
  computed: {
    ...mapState(['drawer']),
    toggleValue: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.setDrawer(val)
      },
    },
  },
  methods: {
    ...mapMutations(['setDrawer']),
  },
}
</script>

<style scoped>
.AvatarCard {
  background-color: transparent;
  border: none;
}
</style>
