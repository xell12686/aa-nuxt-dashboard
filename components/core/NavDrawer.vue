<template>
  <v-navigation-drawer
    v-model="toggleValue"
    :src="theme.isDark ? darkBg : lightBg"
    fixed
    app
  >
    <v-container class="branding-wrap pa-5">
      <v-row>
        <v-col cols="4">
          <div class="logo-wrap">
            <VuetifyLogo />
          </div>
        </v-col>
        <v-col cols="8">
          <v-switch
            color="primary"
            class="ma-0 theme-toggle"
            label="Light Theme"
            @change="$vuetify.theme.dark = !$vuetify.theme.dark"
          ></v-switch>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="AvatarCard text-center py-4" outlined>
      <v-avatar class="mx-auto d-block rounded-circle" size="100">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" />
      </v-avatar>
      <v-card-text class="text-center">
        <v-chip class="ma-2" color="transparent" label>
          <v-icon left>mdi-lock</v-icon>
          <h4 class="font-weight-light">Watson Joyce</h4>
        </v-chip>

        <div class="contact-links mt-2">
          <v-icon>mdi-cog</v-icon>
          <v-icon>mdi-mail</v-icon>
          <v-icon>mdi-comment-plus-outline</v-icon>
        </div>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>

    <v-list-item to="/analytics">
      <v-list-item-icon>
        <v-icon>mdi-chart-line-stacked</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Analytics</v-list-item-title>
    </v-list-item>
    <v-list-item to="/">
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Dashboard</v-list-item-title>
    </v-list-item>
    <v-list-item to="/inspire">
      <v-list-item-icon>
        <v-icon>mdi-chart-bubble</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Inspire</v-list-item-title>
    </v-list-item>

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import VuetifyLogo from '../branding/VuetifyLogo.vue'

export default {
  components: {
    VuetifyLogo,
  },
  inject: ['theme'],
  data: () => ({
    items: [
      {
        action: 'mdi-school',
        items: [{ title: 'List Item' }],
        title: 'Education',
      },
      {
        action: 'mdi-run',
        items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' },
        ],
        title: 'Family',
      },
      {
        action: 'mdi-bottle-tonic-plus',
        items: [{ title: 'List Item' }],
        title: 'Health',
      },
      {
        action: 'mdi-content-cut',
        items: [{ title: 'List Item' }],
        title: 'Office',
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

<style lang="scss" scoped>
.v-navigation-drawer {
  &.theme--dark {
    background-color: $darkPrimary;
  }
  .branding-wrap {
    max-height: 80px;
    overflow: hidden;
  }
  .logo-wrap {
    transform: scale(0.2);
    transform-origin: top;
    left: -20px;
    position: relative;
  }
  .v-card {
    background-color: transparent;
    border: none;
  }
}
.contact-links {
  .v-icon {
    margin: 0 3px;
  }
}
.v-divider {
  border-bottom: 2px solid black;
}
::v-deep {
  .v-image {
    opacity: 0.1;
    &.theme--dark {
      opacity: 0.5;
    }
  }
  .v-input {
    float: right;
    * {
      font-size: 11px;
      text-transform: uppercase;
    }
  }
}
</style>
