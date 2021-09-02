<template>
  <!-- <Spinner v-if="!SPINNER"></Spinner> -->
  <div class="container-fluid" v-if="SPINNER">
    <div class="row">
      <!-- <transition appear name="categories"> -->
      <!-- <div class="col-lg-12 text-center">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="search_bg form-control mr-sm-2"
            type="search"
            placeholder="Search movies"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-warning btn-sm my-2 my-sm-0 button_bg"
            type="submit"
          >
            Search
          </button>
        </form>
      </div> -->
      <div class="col-lg-12 text-left">
        <h6 class="mb-1 label_text">Movies by categories</h6>
        <!-- <div class="parent_div"> -->
        <transition-group
          tag="div"
          class="parent_div"
          @before-enter="before_enter"
          @enter="enter"
        >
          <div
            class="child_div"
            v-for="(genre, index) in jobs.genres"
            :key="genre"
            :data-index="index"
          >
            <table>
              <tr>
                <!-- <td>
               
              </td> -->
                <td  class="text_color">
                  <button class="chiselled">
                    <table>
                      <tr>
                        <td>
                          <div class="icon_circle">
                            	
<i class="fa fa-video-camera"></i>
                          </div>
                        </td>
                        <td class="pl-2 small">
                          {{ genre.name }}
                        </td>
                      </tr>
                    </table>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </transition-group>
      </div>

      <!-- </transition> -->
      <!-- <hr /> -->
    </div>
    <br />

    <div class="row p-0">
      <h6 class="mb-2 ml-3 label_text align-left">Popular movies</h6>
    </div>
 

    <!-- <transition name="card_anim" appear>
      
      </transition> -->
    <transition-group
      tag="div"
      class=" parent_div"
      name="movies"
      appear
      @before-enter="before_enter"
      @enter="enter"
    >
      <div
        v-for="(movie, index) in POPULR_MOVIES.results"
        :data-index="index"
        :key="movie"
        class="col-md-3 col-6 m-0 child_div" style="width:200px;"
      >
        <div
          class="product-grid img-thumbnail p-0 m-1"
          style="border-radius: 10px; border: none"
        >
          <div class="product-image" style="padding: 0px; border-radius: 10px">
            <a href="#" class="image">
              <img
                class="pic-1 img-fluid"
                onerror="this.src='Images/placeholder-image.png'"
                :src="IMG_URL + movie.poster_path"
                style="
                  height: 150px;
                  width: 100%;
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                "
              />
            </a>
            <span class="product-discount-label text_color small">{{
              movie.title
            }}</span>
          </div>

          <div class="product-content text-left">
            <small class="small" style="color: #abb2b9">
              <img src="../assets/images/stars.png" class="rating" /> &nbsp;{{
                movie.vote_average
              }}
            </small>
            <small style="color: #abb2b9" class="small">
              <br /><i class="fa fa-calendar"></i>&nbsp;{{ movie.release_date }}
            </small>
            <small class="small" style="color: #abb2b9">
              <br />	
<i class="fa fa-heart"></i>&nbsp;{{ movie.popularity}}
            </small>

            <table>
              <tr>
                <td>
                  <router-link
                    :to="{ name: 'Details', params: { id: movie.id } }"
                    class="btn more_details btn-sm my-2 my-sm-0 button_bg small"
                    type="submit"
                  >
                    More details&nbsp;<i class="fa fa-angle-double-right"></i>
                  </router-link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </transition-group>
       <div class="row p-0">
      <h6 class="mb-2 ml-3 label_text align-left">Tv shows</h6>
    </div>
  </div>
  <!-- <h4 class="text-danger">{{POPULR_MOVIES}}</h4> -->
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";
import Spinner from "../components/Spinner.vue";
import tv_shows from "../components/tv_shows.vue";
import Vue from "vue";
import VueCardStack from "vue-card-stack";


import gsap from "gsap";

export default {
  components: {
    Spinner,
    tv_shows
  },
  setup() {
    const before_enter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "scale(0)";
      console.log("before enter");
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 0.5,
        onComplete: done,
        y: 0,
        delay: el.dataset.index * 0.3,
        opacity: 1,
        scale: 1,
      });
      console.log(" enter");
    };

    //VARIABLES
    const jobs = ref([]);
    const action = ref([]);
    const action_movies = ref([]);
    const API_KEY = ref("api_key=7e0768276e28e7e3f4136f2e524c7c7c");
    const BASE_URL = ref("https://api.themoviedb.org/3");
    const API_URL =
      BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
    const POPULR_MOVIES = ref([]);
    const IMG_URL = ref("https://image.tmdb.org/t/p/w500");
    const SPINNER = ref(false);

    onMounted(() => {
      {
        {
          //LIST MOVIES BY MOST POPULAR
          fetch(
            "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7e0768276e28e7e3f4136f2e524c7c7c"
          )
            .then((res) => res.json())
            .then((data) => (POPULR_MOVIES.value = data))
            .catch((error) => console.log(error.message));
          console.log(POPULR_MOVIES);
        }
        //MOVIES BY GENRE(ACTION)
        const request = require("request");

        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
            "x-rapidapi-key":
              "c21fe0f4a9msh1e2fcb6f97e0057p1a3b9fjsnf04d8e54d851",
            useQueryString: true,
          },
        };

        const response = fetch(
          "https://data-imdb1.p.rapidapi.com/movie/byGen/action/",
          options
        )
          .then((res) => res.json())
          .then((data) => (action.value = data))
          .catch((error) => console.log(error.message));
      }

      //BY GENRE (ALL CATEGORIES)
      const request = require("request");
      const requestOptions = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key":
            "c21fe0f4a9msh1e2fcb6f97e0057p1a3b9fjsnf04d8e54d851",
          useQueryString: true,
        },
      };
      fetch(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=7e0768276e28e7e3f4136f2e524c7c7c&language=en-US"
      )
        .then((res) => res.json())
        .then((data) => (jobs.value = data))
        .catch((error) => console.log(error.message));

      action_movies.value = jobs;

      SPINNER.value = true;
    });
    return {
      enter,
      jobs,
      before_enter,
      action,
      action_movies,
      POPULR_MOVIES,
      IMG_URL,
      SPINNER,
    };
  },
};
</script>
<style >
.logo_t-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.logo_t-enter-active {
  transition: 3s;
}

.parent_div {
  text-align: left;
  padding-left: 5px;
  /* border:dotted 1px; */
  white-space: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
.parent_div::-webkit-scrollbar {
  display: none;
  /* -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
}
.more_details {
  background: #2e4053 !important;
  color: #ffc107 !important;
}
/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
hr {
  margin-left: 20px;
  margin-right: 20px;
}
.product-discount-label {
  font-family: best;
  color: #abb2b9;
}

@font-face {
  font-family: best;
  src: url("../fonts/best.ttf");
}
.category_image {
  height: 40px;
  width: 40px;
  object-position: center;
  object-fit: cover;
  background-repeat: no-repeat;
  /* border: orangered solid 2px; */
  border-radius: 50px;
}
.categories-enter-from {
  transform: scale(0);
  opacity: 0;
}
.card_anim-enter-from {
  transform: scale(0);
  opacity: 0;
}
.card_anim-enter-active {
  transition: 2s all ease-in;
}
.categories-enter-active {
  transition: 2s all ease;
}
.product-content {
  border: none;
  background: #1c2833;
}
.product-discount-label {
  border: none;
  background: #1c2833 !important;
}
</style>