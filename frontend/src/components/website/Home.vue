<template>
  <div id="home">
    <div id="backgroundImage">
      <img v-lazy="require('../../assets/forrest.png')">
    </div>

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
    min-height: 100%;
    height: 150%;
    position: absolute;
    top: 0;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: -250px
  }

  .left{
    margin-top: 75px;
    width: 90%;
    max-width: 700px;
    border-radius: 100px 0;
    background-color: rgba(0, 0, 0, 0.85) !important;
  }

  /* header title */
  .display-4{
    letter-spacing: 5px;
  }

  /* Victor Munoz */
  #name{
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 2px;
    color: gold;
  }
  /* SFSU */
  #school{
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 2px;
    color: rgb(240, 0, 240);
  }

  /* animate bouncing arrow */
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
    img{
      /* 
        originally image is moved up -250px for desktop users 
        for mobile don't move image up 250px but rather only 50px
      */
      margin-top: -50px;
    }
    .display-4{
      /* make header title smaller */
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


