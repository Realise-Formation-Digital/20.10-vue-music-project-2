<template>
  <div>
  <video muted controls>  
     <source src="https://www.youtube.com/embed/na4uhEy1hqk" type="video/mp4"/> 
     </video>
     <div><v-btn @click="getVideos()">See you list</v-btn>
     </div>
     <br>       
     <div v-for="video in this.myVideos" :key="video.id" class="row">
     <div class="col-md-3 border">{{video.name}}</div>
     <div class="col-md-3 border">
       <img :src="`${video.img}`" alt="music" style="height:80px">
       </div>
       <div class="col-md-3 border">{{video.uNm}}</div>
       </div>
        <br><br><br><br><br><br>
    </div>
</template>

<script>

import axios from "axios";


export default {
  name: 'VideoPlayerHot',
  data () {
    return  {
      videos:[],
      myVideos: [],
    }
  },
  methods: {
    async getVideos() {
    try {
     const result = await axios.get("https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot/electro?format=json&limit=10",{headers: { 'Access-Control-Allow-Origin' : true }, mode: 'cors', }); 
    this.videos=result.data;
    this.myVideos=this.videos.tracks;
    console.log(this.myVideos);
    return this.myVideos;
    } catch (e) {
      console.warn("ERRORS: "+ e);
    }
    },

    chooseVideo(video){
      //SET VIDEO AS ACTIVE VIDEO
      this.activeVideo = video;
      //INCREASE THE VIDEOS VIEWS BY 1
      video.views += 1;
  },
  addLike(){
      //INCREASE THE LIKES BY 1
      this.activeVideo.likes += 1;
},
  removeLike(){
      //INCREASE THE DISLIKES BY 1
      this.activeVideo.dislikes += 1;
}
}
}
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

h3,
p{
    margin:0;
    padding:0;
    color: crimson;
}

.thumbnail-views{
    font-size:14px;
}

.video-container{
    margin-right:40px;
}

.row{
    display:flex;
    justify-content:space-between;
}

button{
    background:crimson;
    color:white;
    border:none;
    padding:10px 20px;
}

</style>