<template>
  <div id="about">


    
    <ul class="flex-container">
        <!-- text -->
        <li class="flex-item" 
          data-aos="fade-right" 
          data-aos-easing="ease" 
          data-aos-duration="800">
          <h2 class="display-4">About</h2>
          <p class="lead">- How I began</p>
          <hr class="w-75 bg-white"/>
          <article>
            <p> 
              Contrary to many of my classmates, I began programming by accident. 
              At <span id="highschool" class="highlight">St. Mary's College High School</span> I did exceptionally well in Math and Physics, 
              so my advisors advised me to pursue a Mechanical, Civil, or Electrical Engineering degree. I chose Mechanical Engineering, 
              since at that time I had no clue about programming.
            </p>
            <p>
              At the end of my second year in college at <span id="college" class="highlight">San Francisco State University</span>, I took a mandatory course called "Introduction to Computers". 
              That class was the very first time I worked with a programming language and was the most enjoyable class I have taken so far.
            </p>
            <p>
              I spent the following year debating whether I should finish my Mechanical Engineering degree or start over and pursue Computer Science.
              Even though I was already half way done with my Mechanical Engineering degree, I chose to pursue Computer Science.
            </p>
          </article>
        </li>

        <!-- image -->
        <li class="flex-item" 
          data-aos="fade-left" 
          data-aos-easing="ease" 
          data-aos-duration="800">
          <img src="../../assets/rain.png" alt="rain" class="img-thumbnail rounded-circle mx-auto d-block my-4">
        </li>
    </ul>

    <!-- arrow -->
    <i class="fas fa-chevron-down arrow bounce" v-scroll-to="'#project'"></i>
  </div>
</template>

<style scoped>
  #about{
    background-color: rgb(29, 31, 32);
    color: white;
  }

  .flex-container{
    margin: 0 45px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: wrap-reverse;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .flex-item{
    max-width: 500px;
  }
  .flex-item article{
    text-align: justify;
  }

  article p{
    margin: 25px 0;
  }
  #highschool{
    color: red;
  }
  #college{
    color: rgb(240, 0, 240);
  }

  .arrow{
    display: flex;
    justify-content: center;
  }
</style>
