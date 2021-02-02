<template>
  <div>
   
    <!-- App carousel -->
    <Carousel></Carousel>
    <!-- App video player -->
    <div id="app">
      <VideoPlayer/>
    </div>
    
  </div>
</template>
<script>

import Carousel from '@/components/views/Carousel.vue';
import VideoPlayer from '@/components/VideoPlayer'


export default {
  name: 'Home',
  components: {
    Carousel,
    VideoPlayer
    },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
