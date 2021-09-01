<template>
  <div class="container-fluid" >

    <div class="stack">
<div class="card_">1</div>
<div class="card_">2</div>
<div class="card_">3</div>
<div class="card_">4</div>
<div class="card_">5</div>
</div>
    </div>
</template>
<script>
import {onMounted} from 'vue'
import {ref} from 'vue'

export default {
setup(){

const data=ref(
  {
   "adult":false,
   "backdrop_path":"/ww1eIoywghjoMzRLRIcbJLuKnJH.jpg",
   "belongs_to_collection":{
      "id":403374,
      "name":"Jack Reacher Collection",
      "poster_path":"/m9v9m21TZxvnSjppposZcgDNZeG.jpg",
      "backdrop_path":"/vViRXFnSyGJ2fzMbcc5sqTKswcd.jpg"
   },
   "budget":60000000,
   "genres":[
      {
         "id":28,
         "name":"Action"
      }
   ],
   "homepage":"http://www.jackreachermovie.com/",
   "id":343611,
   "imdb_id":"tt3393786",
   "original_language":"en",
   "original_title":"Jack Reacher: Never Go Back",
   "overview":"Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
   "popularity":31.732,
   "poster_path":"/wxLUQ1pIms3HAlVGYvEG9zg2kDs.jpg",
   "production_companies":[
      {
         "id":82819,
         "logo_path":"/5Z8WWr0Lf1tInVWwJsxPP0uMz9a.png",
         "name":"Skydance Media",
         "origin_country":"US"
      },
      {
         "id":83645,
         "logo_path":null,
         "name":"Huahua Media",
         "origin_country":"CN"
      },
      {
         "id":3407,
         "logo_path":"/iVMjKOFyRvm9PW45lW1wW6TSvnj.png",
         "name":"Shanghai Film Group",
         "origin_country":"CN"
      },
      {
         "id":21777,
         "logo_path":null,
         "name":"TC Productions",
         "origin_country":""
      },
      {
         "id":4,
         "logo_path":"/fycMZt242LVjagMByZOLUGbCvv3.png",
         "name":"Paramount",
         "origin_country":"US"
      }
   ],
   "production_countries":[
      {
         "iso_3166_1":"CN",
         "name":"China"
      },
      {
         "iso_3166_1":"US",
         "name":"United States of America"
      }
   ],
   "release_date":"2016-10-19",
   "revenue":162146076,
   "runtime":118,
   "spoken_languages":[
      {
         "english_name":"English",
         "iso_639_1":"en",
         "name":"English"
      }
   ],
   "status":"Released",
   "tagline":"Justice is Coming.",
   "title":"Jack Reacher: Never Go Back",
   "video":false,
   "vote_average":5.8,
   "vote_count":3670,
   "videos":{
      "results":[
         {
            "iso_639_1":"en",
            "iso_3166_1":"US",
            "name":"Jack Reacher: Never Go Back (2016) - IMAX Trailer - Paramount Pictures",
            "key":"DTBcGQWmQ1c",
            "published_at":"2016-09-29T16:00:00.000Z",
            "site":"YouTube",
            "size":1080,
            "type":"Trailer",
            "official":true,
            "id":"58ba538dc3a368668f0148b8"
         },
         {
            "iso_639_1":"en",
            "iso_3166_1":"US",
            "name":"Jack Reacher: Never Go Back (2016) - \"Find\" Spot - Paramount Pictures",
            "key":"fm9Ol-Cq7_s",
            "published_at":"2016-09-13T18:07:31.000Z",
            "site":"YouTube",
            "size":1080,
            "type":"Teaser",
            "official":true,
            "id":"57d95e019251416851005d34"
         },
         {
            "iso_639_1":"en",
            "iso_3166_1":"US",
            "name":"Jack Reacher: Never Go Back (2016) - \"Command\" Spot - Paramount Pictures",
            "key":"k3kzqVliF48",
            "published_at":"2016-09-02T17:31:00.000Z",
            "site":"YouTube",
            "size":1080,
            "type":"Teaser",
            "official":true,
            "id":"57d95e2dc3a36852e0005a62"
         },
         {
            "iso_639_1":"en",
            "iso_3166_1":"US",
            "name":"Jack Reacher: Never Go Back (2016) - \"Followed\" Spot - Paramount Pictures",
            "key":"51nZS-a7mMY",
            "published_at":"2016-08-10T20:02:47.000Z",
            "site":"YouTube",
            "size":1080,
            "type":"Teaser",
            "official":true,
            "id":"57d95e49925141670f006166"
         },
         {
            "iso_639_1":"en",
            "iso_3166_1":"US",
            "name":"Jack Reacher: Never Go Back Trailer (2016) - Paramount Pictures",
            "key":"aoCP_JHzBUM",
            "published_at":"2016-06-22T12:00:03.000Z",
            "site":"YouTube",
            "size":1080,
            "type":"Trailer",
            "official":true,
            "id":"58ba535c9251416077018228"
         }
      ]
   }
}
);

 onMounted(() => {


console.log(data);

});

return {data}

}
}
</script>

<style>
.stack{
  width: 500px;
  height: 500px;
  position: relative;
}
.card_{
  background-color: white;
 width: 80%;
 min-height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  justify-content: center;
  display: grid;
  align-items: center;
  text-align: center;
  border-radius: 2rem;
  font-size: 10rem;
  color: #00000080;
  box-shadow: 0 5px 10px 0 #00000040,0 15px  20px 0 #00000020;
  transition: transform 200ms;
}
</style>