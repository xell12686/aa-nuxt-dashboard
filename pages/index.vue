<template>
  <v-container class="pa-5">
    <v-row class="pt-10">
      <v-col cols="8">
        <Welcome class="pa-5" />
        <MiniStats />
      </v-col>
      <v-col cols="4">
        <Weather />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Welcome from '~/components/cards/Welcome'
import Weather from '~/components/cards/Weather'
import MiniStats from '~/components/cards/MiniStats'

export default {
  components: {
    Welcome,
    Weather,
    MiniStats,
  },
}
</script>
