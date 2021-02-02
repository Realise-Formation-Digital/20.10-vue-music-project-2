<template>
<div class="container-fluid py-10 px-10" style="background-color:black;">
  <div class="row video-player">
    <div class="col-md-5 video-container embed-responsive embed-responsive-4by3">
      <iframe width="720" height="1153" class="embed-responsive-item" :src="this.activeVideo.youtubeURL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>  
    <div class="col-md-2">
        <h3>{{this.activeVideo.title}}</h3>
        <p>{{this.activeVideo.views}} views</p>
        <p><button class="fa fa-thumbs-up" @click="addLike"></button>   {{this.activeVideo.likes}} </p>
        <p><button class="fa fa-thumbs-down" @click="removeLike"></button>   {{this.activeVideo.dislikes}} </p>
    </div>
    <div class="col-md-4 video-list" style="background-color:white;">
      <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class="thumbnail">
        <div class="thumbnail-img shadow p-3 mb-5 bg-white rounded">
          <img :src="video.thumbnail" classe="shadow-2-strong" />
          <br />
        </div>
        <div class="thumbnail-info" >
          <h3>{{video.title}}</h3>
          <p>{{video.creator}}</p>
          <p class="thumbnail-views">{{video.views}} Views</p>
          <button class="fa fa-play crimson"></button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</div>
</template>

<script>
let videos = [
    {
    id: 1,
    title: "GIRL LIKE ME (Official Music Video)",
    thumbnail: "https://i.ytimg.com/vi/vMLk_T0PPbk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAShf9CYHNBFB9Fiz9YMUGviIrGtQ",
    youtubeURL: "https://www.youtube.com/embed/vMLk_T0PPbk?list=PLyORnIW1xT6waC0PNjAMj33FdK2ngL_ik",
    creator: "Black Eyed Peas, Shakira",
    songlength: "3:54",
    likes: 1100,
    dislikes: 110,
    views: 11000
  },
  {
    id: 2,
    title: "GNAT (Directed by Cole Bennett)",
    thumbnail: "https://i.ytimg.com/vi/EosMazKaPbU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBr2bd2lhBfpOOeEc2lAh86D0fjfw",
    youtubeURL: "https://www.youtube.com/embed/EosMazKaPbU?list=PLyORnIW1xT6waC0PNjAMj33FdK2ngL_ik",
    creator: "Eminem",
    likes: 2200,
    dislikes: 220,
    views: 22000
  },
  {
    id: 3,
    title: "AVEC TA ZOUZ (Clip Officiel)",
    thumbnail: "https://i.ytimg.com/an_webp/CPgS_VcLKT8/mqdefault_6s.webp?du=3000&sqp=CI-644AG&rs=AOn4CLBbYrx0_a-NJy70MeE6AB9twCBbvA",
    youtubeURL: "https://www.youtube.com/embed/CPgS_VcLKT8",
    creator: "Therapie TAXI",
    likes: 3300,
    dislikes: 330,
    views: 33000
  },
  {
    id: 4,
    title: "Bohemian Rhapsody (Official Video Remastered)",
    thumbnail: "https://i.ytimg.com/an_webp/fJ9rUzIMcZQ/mqdefault_6s.webp?du=3000&sqp=CNy14oAG&rs=AOn4CLCLqbk8IBkzIeLKjGMDz4_1w54Tsg",
    youtubeURL: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    creator: "Queen",
    likes: 4400,
    dislikes: 440,
    views: 44000
  },
  {
    id: 5,
    title: "Sweet Dreams (Are Made Of This) (Official Video)",
    thumbnail: "https://i.ytimg.com/an_webp/qeMFqkcPYcg/mqdefault_6s.webp?du=3000&sqp=CMDJ4oAG&rs=AOn4CLAtf-N3__1xDYSDnSsEYfpiW-h75Q",
    youtubeURL: "https://www.youtube.com/embed/qeMFqkcPYcg",
    creator: "Eurythmics, Annie Lennox, Dave Stewart",
    likes: 5500,
    dislikes: 550,
    views: 55000
  }
];

export default {
  name: 'VideoPlayer',
  data () {
    return {
      videos,
      activeVideo: videos[0]
    }
  },
  methods:{
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