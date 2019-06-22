<template>
  <div id="project">
    <header class="mb-5">
      <h2 class="display-4 text-center">Projects</h2>
      <hr class="w-75 my-0"/> 
    </header>

    <div class="mx-4 pb-4 white-background">
      <div class="card-deck mx-2 py-4">
        <!-- eslint-disable -->
        <div class="card mb-4" v-for="project in projects"
          :key="project.name"
          data-aos= "flip-left"
          :data-aos-delay= project.offset
        >
          <img class="card-img-top" :src="project.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ project.frameworks | joinArray }}</small>
          </div>
        </div>

      </div>

      <!-- <div class="text-center">
        <i class="fas fa-arrow-left left-right-arrows mx-5"></i>
        <i class="fas fa-arrow-right left-right-arrows mx-5"></i>
      </div> -->
    </div>

    <div class="d-flex justify-content-center mt-5">
      <i class="fas fa-chevron-down arrow bounce" v-scroll-to="'#resume'"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        projects: [{
          offset: "0",
          image: require("../../assets/gatorlist/gatorlist1.png"),
          name: 'Gatorlist',
          description: 'Website for SFSU students to look for and find housing.',
          frameworks: ['Laravel', 'Vue.js', 'MySQL']
        },{
          offset: "100",
          image: require("../../assets/agario/agario1.png"),
          name: 'Agar.io Clone',
          description: 'Re-create the popular and addicting game "Agar.io".',
          frameworks: ['Node.js/Express', 'React', 'Redis/MongoDB']
        },{
          offset: "200",
          image: require("../../assets/api/api1.png"),
          name: 'API Endpoints',
          description: 'Practice microservice architecture by making each API endpoint its own stand-alone app.',
          frameworks: ['Node.js/Express', 'React', 'MongoDB']
        },{
          offset: "300",
          image: require("../../assets/rps/rps1.png"),
          name: 'Rock, Paper, Scissors',
          description: '3 hour final exam. Create a rock, paper, scissors web application using websockets.',
          frameworks: ['Node.js/Express', 'React', 'MongoDB']
        }]
      }
    },
    filters: {
      joinArray(value) {
        if (!value) return
        return value.join(' - ');
      }
    }
  }
</script>

<style scoped lang="scss">
  #project{
    background-color: rgb(182, 171, 75);
    color: black;
  }

  .white-background{
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  }

  .card{
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  }

  .left-right-arrows{
    color: black;
    font-size: 50px;  
  }
  .left-right-arrows:hover{
    cursor: pointer;
  }

  .arrow{
    top: 140%;
    color: black;
    font-size: 75px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
  
  // Bootstrap 4 breakpoints & gutter
  $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  ) !default;

  $grid-gutter-width: 30px !default;

  // number of cards per line for each breakpoint
  $cards-per-line: (
    xs: 2,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
  );

  @each $name, $breakpoint in $grid-breakpoints {
    @media (min-width: $breakpoint) {
      .card-deck .card {
        flex: 0 0 calc(#{100/map-get($cards-per-line, $name)}% - #{$grid-gutter-width});
      }
    }
  }
</style>