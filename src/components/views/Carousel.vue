<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../../images/carousel.jpg'),
          },
          {
            src: require('../../images/carousel1.jpg'),
          },
          {
            src: require('../../images/carousel2.jpg'),
          },
          {  
            src: require('../../images/carousel3.jpeg'),
          },  
        ],
      }
    },
  }
</script>