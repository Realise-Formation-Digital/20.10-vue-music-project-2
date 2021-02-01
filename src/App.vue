<template>
  <v-app>
    <v-app-bar app dense fixed>
      <v-toolbar-title>
        <v-icon>mdi-headphones</v-icon>
        <router-link to="/" custom v-slot="{ navigate }">
          <span @click="navigate" @keypress.enter="navigate" role="link">{{ appTitle }}</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items> 
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data(){
    return {
      appTitle: 'Vue Music',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/' },
          { title: 'About Us', path: '/about' },
          { title: 'Hot Tracks', path: '/hottracks' }
     ]
    }
  },
};
</script>