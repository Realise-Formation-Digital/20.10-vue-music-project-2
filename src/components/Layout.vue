<template>
  <v-footer dark fixed>
    <v-card class="flex" flat tile >
      <v-card-title class="dark">
        <!--<img src="../images/logo.png" alt="logo app" style="height: 100px;">-->
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        Copyright @ {{ new Date().getFullYear() }} — <strong>Vue Music</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>