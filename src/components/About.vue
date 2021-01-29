<template>
  <div>
    <!-- App content -->
    <about-us></about-us>
    <!-- App footer -->
    <layout></layout>
  </div>
</template>

<script>
import AboutUs from '@/components/views/AboutUs.vue';
import Layout from '@/components/Layout.vue';

export default {
  name: 'About',
  components: {
        AboutUs,
        Layout,
        },
};
</script>
