<template>
  <transition appear enter-active-class="animated fadeIn">
    <div class="sticky-top"> 
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-4 px-5">
        <a class="navbar-brand mx-5" href="" 
          v-scroll-to="{
            el:'#home',
            offset: -100,
          }">
          Victor Muñoz
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ml-5">
            <li class="nav-item active">
              <a class="nav-link" href="" v-scroll-to="'#about'">About</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="" v-scroll-to="'#project'">Projects</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="" v-scroll-to="'#resume'">Resume</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-5">
            <li class="nav-item active">
              <a class="nav-link mr-5" href="" v-scroll-to="'#contact'">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </transition>
</template>

<style scoped>
  .navbar{
    background-color: rgba(0, 0, 0, 0.85) !important;
    -webkit-box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.75);
  }
</style>