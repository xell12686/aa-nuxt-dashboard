<template>
  <v-toolbar-items>
    <v-row align="center" class="mx-0">
      <v-text-field
        class="mr-4 purple-input"
        color="purple"
        label="Search..."
        hide-details
      />

      <v-btn icon to="/">
        <v-icon color="tertiary"> mdi-view-dashboard </v-icon>
      </v-btn>

      <v-menu bottom left offset-y transition="slide-y-transition">
        <template #activator="{ attrs, on }">
          <v-btn
            class="toolbar-items"
            icon
            to="/notifications"
            v-bind="attrs"
            v-on="on"
          >
            <v-badge color="error" overlap>
              <template slot="badge">
                {{ notifications.length }}
              </template>
              <v-icon color="tertiary"> mdi-bell </v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-card>
          <v-list dense>
            <v-list-item
              v-for="notification in notifications"
              :key="notification"
            >
              <v-list-item-title v-text="notification" />
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-btn to="/user-profile" icon>
        <v-avatar class="rounded-circle" size="30">
          <v-img src="https://randomuser.me/api/portraits/men/1.jpg" />
        </v-avatar>
      </v-btn>
    </v-row>
  </v-toolbar-items>
</template>

<script>
export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      "You're now a friend with Andrew",
      'Another Notification',
      'Another One',
    ],
    title: null,
    responsive: false,
  }),
}
</script>
