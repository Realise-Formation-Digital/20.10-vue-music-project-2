<template>
<div class="container">
    <div class="row bg-dark">
        <div class="col-md-3 text-white">Name</div>
        <div class="col-md-3 text-white">image</div>
        <div class="col-md-3 text-white">track</div>
    </div>
   <div v-for="track in tracks" :key="track._id" class="row bg-secondary">
        <div class="col-md-3 text-white border">{{track.name}}</div>
        <div class="col-md-3 text-white border">{{track.img}}</div>
        <div class="col-md-3 text-white border">{{track.track}}</div>
   </div>
      
</div>
</template>
<script>
import axios from 'axios';

export default {
  name: "hottrackslist",
  data() {
    return {
      tracks: [],
    };
  },
beforeMount() {
    this.getHotTracks();
  },
methods: {
  getTracks() {
            return axios.get('https://openwhyd.org/hot');
      },
    async getHotTracks() {
      const response = await this.getTracks();
      this.tracks = response.data.results;
    },
    
  }
};


</script>