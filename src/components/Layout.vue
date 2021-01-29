<template>
  <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div>
            <v-card-title>
            <img src="../images/logo1.png" alt="logo app" style="height: 100px;">
            <strong class="subheading">Get connected with us on social networks!</strong>
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="26px">{{ icon }}</v-icon>
            </v-btn>
            <v-card-text class=" white--text text-center">{{ new Date().getFullYear() }} — <strong>VUEMUSIC</strong>
            </v-card-text>
            
            </v-card-title>
          </div>
        </v-flex>
      </v-layout>
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
