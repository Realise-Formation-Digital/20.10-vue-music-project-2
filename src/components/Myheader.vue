<template>
  <v-app-bar app dense fixed>
      <v-toolbar-title>
        <!-- logo -->
        <img src="../images/logo.png" alt="logo app" style="height: 50px;">
        <router-link to="/" custom v-slot="{ navigate }">
          <span @click="navigate" @keypress.enter="navigate" role="link">{{ appTitle }}</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left color="#eb5950" >{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items> 
    </v-app-bar>
</template>

<script>
import { mdiHome, mdiAccountMusicOutline, mdiFireAlert   } from "@mdi/js";

export default {
    name: "Myheader",
    data(){
    return {
      appTitle: 'Vue Music',
      sidebar: false,
      menuItems: [
          { icon: mdiHome,  title: 'Home', path: '/' },
          { icon: mdiAccountMusicOutline , title: 'About Us', path: '/about' },
          { icon: mdiFireAlert,  title: 'Hot Tracks', path: '/hottracks' }
     ]
    }
  },

}
</script>

<style>

</style>