<template>
  <div id="home">
    <div id="backgroundImage"/>

    <transition appear enter-active-class="animated fadeIn">
      <div class="row text-white mx-0">
        <header class="col-md-8 col-lg-7 col-xl-6 ">
          <div class="container left text-center pb-1">
            <div class="display-4 m-0">Hello World</div>
            <hr class="bg-white mt-0 w-75"/>
            <p class="container text-left">
              Thank you for visiting my website. My name is <span id="name">Victor Muñoz</span>, 
              a recent college graduate from <span id="school">San Francisco State University</span> 
              with a B.S degree in Computer Science. Please click the arrow below to read more.
            </p>
          </div>
        </header>
        <div class="col">
          <div class="container right">          
          </div>
        </div>
      </div>
    </transition>
  
    <div class="d-flex justify-content-center">
      <i class="fas fa-chevron-down arrow bounce" v-scroll-to="'#about'"></i>
    </div>
  </div>
</template>

<style scoped>
  #home{
    width: 100%;
    height: 80vh;
    min-height: 675px;
  }

  #backgroundImage { 
    z-index: -1;
    width: 100%;
    /* height: 1000px; */
    min-height: 100%;
    height: 150%;
    background: url(../../assets/forrest.png) no-repeat center center fixed; 
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* for browser */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .left{
    margin-top: 75px;
    width: 90%;
    border-radius: 100px 0;
    background-color: rgba(0, 0, 0, 0.85) !important;
  }

  .display-4{
    letter-spacing: 5px;
  }

  #name{
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 2px;
    color: gold;
  }
  #school{
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 2px;
    color: rgb(240, 0, 240);
  }

  .arrow{
    position: absolute;
    top: 50%;
    margin-top: 290px;
    color: white;
    font-size: 75px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  @media (max-width: 768px) and (orientation:portrait) {
    #backgroundImage{
      /* for mobile */
      -webkit-background-size: auto 100%; 
      -moz-background-size: auto 100%; 
      -o-background-size: auto 100%; 
      background-size: auto 100%;
      background-attachment: scroll;
    }
    .display-4{
      font-size: 40px;
    }
  }

  @media (max-width: 768px) and (orientation:landscape) {
    #backgroundImage{
      /* for mobile */
      /* -webkit-background-size: 100% auto; 
      -moz-background-size: 100% auto; 
      -o-background-size: 100% auto; 
      background-size: 100% auto; */
      background-attachment: scroll;
    }
    .display-4{
      font-size: 40px;
    }
  }
</style>


