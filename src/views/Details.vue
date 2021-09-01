<template>
<div class="container-fluid">
<transition-group name="bg" appear>
  <div v-if="MOVIE_DETAILS"  class="movies_details" v-bind:style="{ 'background-image': 'linear-gradient(to top,black 20%,#F99205 100%),url(' + IMG_URL + MOVIE_DETAILS.backdrop_path + ')' }">
    <!-- <transition name="table" appear> -->
<transition name="table" appear>

      <div class="row" >
        <div class="col-lg-3">

       <div class="poster" v-bind:style="{ 'background-image': 'url(' + IMG_URL + MOVIE_DETAILS.poster_path + ')' }"/>

        </div>
        <div class="col-lg-9">

      <table>
        <tr>
          <h2 class="text_color">{{MOVIE_DETAILS.genres &&MOVIE_DETAILS.genres.length > 0? MOVIE_DETAILS.genres[0].name :''}}</h2>
          <!-- sight.photos && sight.photos.length > 0 ? sight.photos[0].photo_reference : '' -->
        </tr>
  <tr>
    <td class="title pt-3" >
   <h4> {{MOVIE_DETAILS.title}}</h4>
    </td>
  </tr>
   <tr>
    <td class="title">
    <h5> {{MOVIE_DETAILS.release_date}}</h5>
    </td>
   </tr>
   <tr>
    <td class="title">
    <h6> {{MOVIE_DETAILS.runtime}} &nbsp;Minutes</h6>
    </td>
  </tr>
   <tr>
    <td class="text_description text_left">
<small>{{MOVIE_DETAILS.overview}}</small>
      </td>
  </tr>
  <tr>
    <td class="title">
      <img src="../assets/images/stars.png" class="rating_big" /> &nbsp; 7.8
<p v-for="v in MOVIE_DETAILS.production_countries" :key="v">
({{v.iso_3166_1}}),{{v.name}}

</p>

    </td>

  </tr>
  <tr ><td classs="text_color"><img src="https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png" class="youtube"><small class="text_color">Trailer:</small>
  </td></tr>
  <tr>
<td>
      <!-- <button class="btn btn-outline-warning btn-sm my-2 my-sm-0 button_cart" type="submit">Add to cart &nbsp;<i class="fa fa-cart-plus" aria-hidden="true"></i></button> -->
      <button class=" btn-sm my-2 my-sm-0 button_icon" type="submit"><i class="fa fa-globe" aria-hidden="true"></i></button>
      <button class=" btn-sm my-2 my-sm-0 button_icon" type="submit"><i class="fa fa-heart" aria-hidden="true"></i></button>
      <button class=" btn-sm my-2 my-sm-0 button_icon" type="submit"><i class="fa fa-share-alt" aria-hidden="true"></i>
</button>
  <button class=" btn-sm my-2 my-sm-0 button_icon" type="submit"><i class="fa fa-youtube-play" aria-hidden="true"></i>

</button>
</td>

  </tr>
 
  </table>
   
        </div>
        </div>

</transition>

    <!-- </transition> -->
  </div>
</transition-group>
</div>
</template>

<script>
import {onMounted, ref} from 'vue'
export default {
props:['id'],
 setup(props) {
const MOVIE_DETAILS=ref([])
const BASE_URL=ref('https://api.themoviedb.org/3/movie/')
const API_KEY=ref('?api_key=7e0768276e28e7e3f4136f2e524c7c7c')
const MOVIE_ID=ref(props.id)
const COMBINED_ENDPOINT=ref(BASE_URL.value+MOVIE_ID.value+API_KEY.value)
const IMG_URL = ref("https://image.tmdb.org/t/p/w500");


 onMounted(() => {
      {
 {

          // LETS FETCH MOVIE DETAILS BASED ON MOVIE ID
          fetch('https://api.themoviedb.org/3/movie/'+props.id+'?api_key=7e0768276e28e7e3f4136f2e524c7c7c')
            .then((res) => res.json())
            .then((data) => (MOVIE_DETAILS.value = data))
            .catch((error) => console.log(error.message));
          console.log(MOVIE_DETAILS);
        }


      }})
   return {MOVIE_DETAILS,IMG_URL};
 },
 
};
</script>

<style>
.movies_details{
  height: 500px;
  width: 95%;
   background-image: linear-gradient(to top,black 20%,#F99205 100%),url('https://i.pinimg.com/originals/20/b4/18/20b418c579302b5b0530a637a44bf3cf.jpg');
  background-blend-mode:multiply;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
margin: 10px;
margin-top: 2px;

  border-radius: 10px;;
}
.poster{
  margin-top: 15px;
  height: 300px;
  border-radius: 15px;
  width: 90%;
  background-position: center;

margin-left: 15px;
}
.title{
  color: #DAE3E5 !important;
}
.button_cart{
  /* background: #0BBFE3 !important; */
  border-radius: 8px !important;
  color: #DAE3E5 !important;
  border: 1px #DAE3E5 solid !important;
}
.table-enter-from{
  transform: translateX(-400px);
  opacity: 0;
}
.bg-enter-from{
  transform: translateX(-400px);
  opacity: 0;
}
.table-enter-active{
  animation-delay: 5s;
  transition: all ease-in 1s;
}
.bg-enter-active{
  animation-delay: 5s;
  transition: all ease-in 0.5s;
}

</style>