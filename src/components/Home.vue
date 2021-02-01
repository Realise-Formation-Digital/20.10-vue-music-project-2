<template>
  <div>
    <!-- App carousel -->
    <carousel></carousel>
    <!-- App footer -->
    <layout></layout>
  </div>
</template>
<script>
import Layout from '@/components/Layout.vue';
import Carousel from '@/components/views/Carousel.vue';

export default {
  name: 'Home',
  components: {
    Layout,
    Carousel,
    },
};
</script>
