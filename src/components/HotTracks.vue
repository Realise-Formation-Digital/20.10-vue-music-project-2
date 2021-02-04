<template>
<div class="container-fluid px-10 py-10" style="background-color:black;">
  <h1  class="font-weight-light text-center mt-4 mb-0">Hot Tracks for you by Vue Music!</h1>
  <hr class="mt-2 mb-5" style="background-color:crimson;">
  <div class="row text-center text-lg-left">
    <div v-for="track in tracks" :key="track._id" class="col-lg-3 col-md-4 col-6" style="background-color:crimson;">
      <iframe v-if=" track.eId.length < 40 " width="250" height="250" :src="`https://youtube.com/embed/${track.eId.substring(4)}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div v-else><img  :src="track.img" class="img-fluid img-thumbnail" /><p><a :href="`https://soundcloud.com${track.eId.substring(3)}`" target="_blank">{{track.name}}</a></p></div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
</template>

<script>
import axios from 'axios';

export default {

  name: "hottrackslist",
  data() {
      return {
      tracks: [],
      }
  },
beforeMount() {
    this.getHotTracks();
  },
methods: {
    async getTracks() {
      try{
        const result = await axios.get('https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot?format=json');
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
    }
  }
};
  
</script>
<style scoped>
h1 {
  text-align: center;
  color: crimson;
}
a:link {
  color: white;
  text-decoration: none;
  }
a:hover {
  color: black;
  text-decoration: none;
  }

</style>