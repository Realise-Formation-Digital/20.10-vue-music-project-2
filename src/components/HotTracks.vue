<template>
<div class="container">
    <div class="row bg-dark">
        <div class="col-md-3 text-white">Name</div>
        <div class="col-md-3 text-white">image</div>
        <div class="col-md-3 text-white">Posted</div>
    </div>
   <div v-for="track in tracks" :key="track._id" class="row bg-secondary">
        <div class="col-md-3 text-white border">{{track.name}}</div>
        <div class="col-md-3 text-white border">{{track.img}}</div>
        <div class="col-md-3 text-white border">{{track.uNm}}</div>
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
    async getTracks() {
      try{
        const result = await axios.get('https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot/electro?format=json');
        console.log("data Fetched", result)
        //this.tracks = result.data.tracks
        return result.data.tracks
      }catch(e){
        console.log(e)
      }
    },
    async getHotTracks() {
      const response = await this.getTracks();
      this.tracks = response;
    },
    
  }
};


</script>
