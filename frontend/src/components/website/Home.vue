<template>
  <div id="home">
    <!-- background image -->
    <img src="../../assets/forrest.jpg">


    <!-- hello world box -->
    <transition appear enter-active-class="animated fadeIn">
      <div class="row mx-auto">
        <header class="col-md-8 col-lg-6">
          <div class="left-box">
            <div class="display-4">Hello World</div>
            <hr class="bg-white mt-0 w-75"/>
            <p>
              Thank you for visiting my website. My name is <span id="name" class="highlight">Victor Muñoz</span>, 
              a recent college graduate from <span id="college" class="highlight">San Francisco State University</span> 
              with a B.S degree in Computer Science. Please click the arrow below to read more.
            </p>
          </div>
        </header>
      </div>
    </transition>

    <!-- arrow pointing down -->
    <div class="d-flex justify-content-center">
      <i class="fas fa-chevron-down arrow bounce" v-scroll-to="'#about'"></i>
    </div>
  </div>
</template>

<style scoped>
  #home{
    height: 92vh;
    color: white;
  }

  img{
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 150vh;
    object-fit: cover;
    margin-top: -25vh;
  }

  .left-box{
    margin: 10% auto;
    padding: 5px 0;
    width: 90%;
    max-width: 600px;
    border-radius: 100px 0;
    background-color: rgba(0, 0, 0, 0.85) !important;

    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .75);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:    0px 0px 10px 0px rgba(0, 0, 0, .75);  /* Firefox 3.5 - 3.6 */
    box-shadow:         0px 0px 10px 0px rgba(0, 0, 0, .75);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  }
  .left-box p {
    padding: 0 45px;
    text-align: justify;
  }
  /* header title */
  .display-4{
    letter-spacing: 5px;
    text-align: center;
  }
  
  /* Victor Munoz */
  #name{
    color: gold;
  }
  /* SFSU */
  #college{
    color: rgb(240, 0, 240);
  }

  /* arrow */
  .arrow{
    position: absolute;
    top: 0;
    margin-top: 90vh;
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
</style>


