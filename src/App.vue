<template>
<!-- 
 <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>  -->
     <transition name="nav" appear >
    <nav class="navbar navbar-expand-sm  bg_">
      <!-- <img src="../assets/logo.png"/> -->
     
  <a class="navbar-brand text_color" href="#">
     <transition name="logo_" appear >
   
     <img alt="Vue logo" src="./assets/logo.png" class="logo" >
     </transition>
      &nbsp;Moview</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item active">
        <a class="nav-link text_color" href="#">Log in <span class="sr-only">(current)</span></a>
      </li>
     
     
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> -->
    </ul>
    <transition name="search" appear>
    <form class="form-inline my-2 my-lg-0">
      <input class="search_bg form-control mr-sm-2 " type="search" placeholder="Search movies" aria-label="Search">
      <button class="btn btn-outline-warning btn-sm my-2 my-sm-0 button_bg" type="submit">Search</button>
    </form>
    </transition>
  </div>
</nav>
      </transition>

  <div id="nav">
  </div>


  <router-view/>
</template>

<style>
@font-face{
  font-family: best;
  src: url('./fonts/best.ttf');
}
html{
  font-family: best;
}
#app {
    font-family: best;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.text_color{
  color:#F39C12;
}
.text_color:hover{
  color:#B9770E;
}
.logo{
  height: 40px;
  border: 2px #F39C12 solid;
  border-radius: 50px;
  padding: 5px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.bg_{
  background: #273746;
  color: white;
}

.nav-enter-from{
  transform:scale(0);
  transform: translateY(-50px);
  opacity: 0;
}
.nav-enter-active{
  transition: all 0.5s ease;
}
.logo_-enter-from{
  transform:scale(0);
  /* transform: translateY(-50px); */
  opacity: 0;
}
.logo_-enter-active{
  transition: all 1s ease;
}
.search-enter-from{
  transform:scale(0);
  /* transform: translateY(-50px); */
  opacity: 0;
}
.search-enter-active{
  transition: all 1s ease;
}
.search_bg{
  background: #1C2833 !important;
  border-radius: 50px !important;
  border:none !important;
}
.button_bg{
  border-radius: 50px !important;
}
</style>
<script>
import Navbar from './components/navbar.vue'

export default {
  name: 'Navbar',
  components: {
    Navbar
  }
}
</script>
