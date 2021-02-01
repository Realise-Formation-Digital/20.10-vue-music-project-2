<template>
<div class="container">
    <div class="row bg-dark">
        <div class="col-md-3 text-white">#</div>
        <div class="col-md-3 text-white">Nom</div>
        <div class="col-md-3 text-white">eId</div>
        <div class="col-md-3 text-white">Image</div>
    </div>
    <div v-for="track in tracks" :key="track._id">
        <div class="col-md-3 text-white border">{{track._id}}</div>
        <div class="col-md-3 text-white border"><h5>{{track.name}}</h5></div>
        <div class="col-md-3 text-white border">{{track.eId}}</div>
        <div class="col-md-3 text-white border">{{track.img}}</div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HotTracks',
  data: () => ({
    tracks: [],
    errors: []
  }),
  created () {
    axios.get('https://openwhyd.org/hot?format=json')
      .then(response => {
        this.tracks = response.data.DISPLAY
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>