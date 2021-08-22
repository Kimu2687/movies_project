<template>
<div class="container-fluid">
<div class="row">
  <transition appear name="categories">

<div class="col-lg-12">
<h6 class="m-6" style="color:#ABB2B9">
                                <i class="fa fa-film"></i>
  
  Movies by category </h6>
<hr />

 <div class="parent_div">
  
    
{{jobs}}

   <!-- </transition-group> -->

</div>
</div>
  </transition>

</div>
<br>
<div class="row">
  <div class="col-md-3 col-6 ">
                    <div class="product-grid img-thumbnail  p-0" style="border-radius:10px;border:none">
                        <div class="product-image" style="padding:0px;border-radius:10px;">

                            <a href="#" class="image">


                                <img class="pic-1 img-fluid" onerror="this.src='Images/placeholder-image.png'" src="https://catholicreview.org/wp-content/uploads/2021/07/20210623T1100-MOVIE-REVIEW-F9-FAST-SAGA-1250672.jpg " style="height:150px;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;">

                            </a>
                            <span class="product-discount-label" style="color:#ABB2B9">Fast & the furious</span>

                        </div>

                        <div class="product-content text-left">
                            

                            <small style="color:#ABB2B9">

                                <i class="fa fa-film"></i>
                                Action
                            </small>
                            <small style="color:#ABB2B9">
                                <br /><i class="fa fa-info-circle"></i>&nbsp;This film was released in 2009
                            </small>
                            <table>
                                <tr>

                                    <td>
                                             <button class="btn btn-outline-warning btn-sm my-2 my-sm-0 button_bg" type="submit">More details&nbsp;<i class="fa fa-angle-double-right"></i></button>

                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
            
</div>
 <div class="col-md-3 col-6 ">
                    <div class="product-grid img-thumbnail  p-0" style="border-radius:10px;border:none">
                        <div class="product-image" style="padding:0px;border-radius:10px;">

                            <a href="#" class="image">


                                <img class="pic-1 img-fluid" onerror="this.src='Images/placeholder-image.png'" src="https://img.mensxp.com/media/content/2019/Dec/upcoming-hollywood-movies-to-binge-watch-in-2020-1200x900-1577798331_1200x900.jpg " style="height:150px;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;">

                            </a>
                            <span class="product-discount-label" style="color:#ABB2B9">Fast & the furious</span>

                        </div>

                        <div class="product-content text-left">
                            

                            <small style="color:#ABB2B9">

                                <i class="fa fa-film"></i>
                                Action
                            </small>
                            <small style="color:#ABB2B9">
                                <br /><i class="fa fa-info-circle"></i>&nbsp;This film was released in 2009
                            </small>
                            <table>
                                <tr>

                                    <td>
                                             <button class="btn btn-outline-warning btn-sm my-2 my-sm-0 button_bg" type="submit">More details&nbsp;<i class="fa fa-angle-double-right"></i></button>

                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
            
</div>
 <div class="col-md-3 col-6 ">
                    <div class="product-grid img-thumbnail  p-0" style="border-radius:10px;border:none">
                        <div class="product-image" style="padding:0px;border-radius:10px;">

                            <a href="#" class="image">


                                <img class="pic-1 img-fluid" onerror="this.src='Images/placeholder-image.png'" src="https://i.pinimg.com/originals/46/a3/6e/46a36e9468e163cd62e58239b0bc0cd6.jpg" style="height:150px;width:100%;border-top-left-radius:10px;border-top-right-radius:10px;">

                            </a>
                            <span class="product-discount-label" style="color:#ABB2B9">Fast & the furious</span>

                        </div>

                        <div class="product-content text-left">
                            

                            <small style="color:#ABB2B9">

                                <i class="fa fa-film"></i>
                                Action
                            </small>
                            <small style="color:#ABB2B9">
                                <br /><i class="fa fa-info-circle"></i>&nbsp;This film was released in 2009
                            </small>
                            <table>
                                <tr>

                                    <td>
                                             <button class="btn btn-outline-warning btn-sm my-2 my-sm-0 button_bg" type="submit">More details&nbsp;<i class="fa fa-angle-double-right"></i></button>

                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
            
</div>
  </div>
</div>



</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import { onMounted } from 'vue'
export default {
setup(){

const jobs=ref([]);



    onMounted(() => {
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://data-imdb1.p.rapidapi.com/genres/',
  headers: {
    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
    'x-rapidapi-key': 'c21fe0f4a9msh1e2fcb6f97e0057p1a3b9fjsnf04d8e54d851',
    // useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

  // POST request using fetch with async/await
  const requestOptions = {
    method: "GET",
     headers: {
    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
    'x-rapidapi-key': 'c21fe0f4a9msh1e2fcb6f97e0057p1a3b9fjsnf04d8e54d851',
    useQueryString: true
  } };
  const response =  fetch("https://data-imdb1.p.rapidapi.com/genres/", requestOptions)
  .then((res)=>res.json())
.then(data=> jobs =data)
.catch(error =>console.log(error.message))
console.log(jobs)
    

   })
   const enter=(el,done)=>{
gsap.to(el,{
duration:0.5,
onComplete:done,
y:0,
delay:el.dataset.index*0.2,
opacity:1



})};
return {jobs,enter}

}

}
</script>
<style >
.logo_t-enter-from{
  transform: translateX(50px);
  opacity: 0;
}

.logo_t-enter-active{
  transition: 3s ;
}
.parent_div{
  text-align: left;
    padding-left:5px;
    /* border:dotted 1px; */
    white-space:nowrap;
    overflow-x:auto;
 -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; 
   
}
.parent_div::-webkit-scrollbar {
  display: none;
  /* -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
hr{
  margin-left:20px ;
  margin-right:20px ;

}
.product-discount-label{
  font-family: best;
  color: #ABB2B9;
}
.child_div{
  width:auto;
 height: 42x;
 border-radius: 10px;
    background-color:#1c2833;
    margin-right:10px;
    display:inline-block;
    padding: 2px;
}
@font-face{
  font-family: best;
  src: url('../fonts/best.ttf');
}
.category_image{
  height: 40px;
  width:40px;
  object-position: center;
  object-fit: cover; 
  background-repeat: no-repeat;
  /* border: orangered solid 2px; */
  border-radius: 50px;
}
.categories-enter-from{
  transform:scale(0);
  opacity: 0;
  
}

.categories-enter-active{
  transition: 2s all ease;
  
}
.product-content{
  border: none;
  background:#1c2833 ;
}
.product-discount-label{
  border: none;
  background:#1c2833 !important;
}
</style>