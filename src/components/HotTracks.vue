<template>
<div class="container-fluid py-5 px-10" style="background-color:crimson;">
<VideoPlayerHot></VideoPlayerHot>
    <div class="row">
        <div  v-for="track in tracks" :key="track._id" class="col-md-4">
            <div style="background-color:white;" class="thumbnail-img shadow p-3 mb-5 bg-white rounded">
                <img :src="track.img" width="250" height="200" classe="shadow-2-strong" />
                <p v-if=" track.eId.length > 30 "><a :href="`${track.eId.substring(track.eId.indexOf('#') + 1)}`">{{track.name}}</a>
                <p v-else><a :href="`https://youtube.com/watch?v=${track.eId.substring(4)}`">{{track.name}}</a>
                </p>
            </div>
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
</div>
</template>

<script>
import axios from 'axios';
import VideoPlayerHot from "@/components/VideoPlayerHot.vue";

export default {
components: {
  VideoPlayerHot
},

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
  function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute(
      'src',
      'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0'
    );
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    );
    div.parentNode.replaceChild(iframe, div);
  }

  function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
      var videoId = playerElements[n].dataset.id;
      var div = document.createElement('div');
      div.setAttribute('data-id', videoId);
      var thumbNode = document.createElement('img');
      thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace(
        'ID',
        videoId
      );
      div.appendChild(thumbNode);
      var playButton = document.createElement('div');
      playButton.setAttribute('class', 'play');
      div.appendChild(playButton);
      div.onclick = function () {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  document.addEventListener('DOMContentLoaded', initYouTubeVideos);
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

.bs-example{
    margin: 20px;
}

</style>