<template>
  <v-app>
    <Myheader></Myheader>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Myfooter></Myfooter>
  </v-app>
</template>
<script>
import Myheader from "./components/Myheader.vue";
import Myfooter from './components/Myfooter.vue';

export default {
  components: { 
    Myheader,
    Myfooter
   },
  name: "App",

};
</script>