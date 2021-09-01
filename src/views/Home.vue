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
      class="row no-gutters"
      name="movies"
      appear
      @before-enter="before_enter"
      @enter="enter"
    >
      <div
        v-for="(movie, index) in POPULR_MOVIES.results"
        :data-index="index"
        :key="movie"
        class="col-md-2 col-6 m-0"
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
                    More details &nbsp;<i class="fa fa-angle-double-right"></i>
                  </router-link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
  <!-- <h4 class="text-danger">{{POPULR_MOVIES}}</h4> -->
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";
import Spinner from "../components/Spinner.vue";

import gsap from "gsap";

export default {
  components: {
    Spinner,
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
    const API_URL =BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
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
.child_div {
text-align: left;
  width: auto;
  padding: 5px;
  border-radius: 50px;
  /* background-color: #1c2833; */
  margin-right: 0px;
  display: inline-block;
  /* padding: 2px; */
  /* background-image: url('data:image/jpeg;base64,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'); */
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