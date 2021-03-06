<template>
  <v-container class="mt-5">
    <v-row>
      <v-col>
        <Sparkle />
      </v-col>
      <v-col>
        <HeartRate height="100%" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Sparkle from '~/components/cards/Sparkle'
import HeartRate from '~/components/cards/HeartRate'

export default {
  components: {
    Sparkle,
    HeartRate,
  },
}
</script>
