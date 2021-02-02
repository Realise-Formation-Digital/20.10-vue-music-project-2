<template>
<div class="container-fluid py-5 px-10" style="background-color:crimson;">
    <div v-for="track in tracks" :key="track._id" class="row">
        <div  v-for="track in tracks" :key="track._id" class="col-md-4">
            <div style="background-color:white;" class="thumbnail-img shadow p-3 mb-5 bg-white rounded">
                <img :src="track.img" width="250" height="200" classe="shadow-2-strong" />
                <p><a :href="`https://youtube.com/watch?v=${track.eId}`">{{track.name}}</a></p>
            </div>
        </div>
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
    },
    

    
  }

};


</script>
<style scoped>
  .thumbnail{
    display:flex;
  }
  .thumbnail img{
    width:250px;
}

.thumbnail-info{
    margin-left:20px;
}

.thumbnail h3{
    font-size:16px;
}
</style>