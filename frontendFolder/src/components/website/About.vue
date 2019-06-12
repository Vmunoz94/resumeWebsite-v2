<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <!-- text -->
        <div class="col-xs-12 col-md-6" 
          data-aos="fade-up-right" 
          data-aos-easing="ease" 
          data-aos-duration="600"
          data-aos-offset="0">
          <h2 class="display-4 text-center">About</h2>
          <p class="lead text-center">- How I began</p>
          <hr class="w-75 text-center bg-white"/>
          <p> 
            Contrary to many of my classmates, I began programming by accident. 
            At <span class="highSchool">St. Mary's College High School</span> I did exceptionally well in Math and Physics, 
            so my advisors advised me to pursue a Mechanical, Civil, or Electrical Engineering degree. I chose Mechanical Engineering, 
            since at that time I had no clue about programming.
          </p>
          <p>
            At the end of my second year in college at <span class="college">San Francisco State University</span>, I took a mandatory course called "Introduction to Computers". 
            That class was the very first time I worked with a programming language. That class was the most enjoyable class I have taken so far, 
            soon after that semester ended I began looking into that major.
          </p>
          <p>
            I spent the following year debating whether I should finish my Mechanical Engineering degree or start over and pursue Computer Science.
            Even though I was already half way done with my Mechanical Engineering degree, I chose to pursue Computer Science.
          </p>
        </div>

        <!-- image -->
        <div class="col-12 col-md-6 order-first order-md-last" 
          data-aos="fade-up-left" 
          data-aos-easing="ease" 
          data-aos-duration="600"
          data-aos-offset="0">
          <img src="../../assets/rain.png" alt="rain" class="img-thumbnail rounded-circle mx-auto d-block my-4">
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <i class="fas fa-chevron-down arrow bounce" v-scroll-to="'#project'"></i>
    </div>
  </div>
</template>

<style scoped>
  .highSchool{
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 2px;
    color: red;
  }
  .college{
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 2px;
    color: rgb(240, 0, 240);
  }
  
  #about{
    background-color: rgb(29, 31, 32);
    color: white;
  }

  img{
    max-height: 500px;
  }

  .arrow{
    top: 140%;
    color: white;
    font-size: 75px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
</style>
