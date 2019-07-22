<template>
  <div id="project">
    <header class="mb-3">
      <h2 class="display-4 text-center">Projects</h2>
      <hr class="w-75 my-0"/> 
    </header>
    <div class="alert alert-warning w-75 mx-auto" role="alert">
      <strong>Disclaimer:</strong> To respect some team member's intellectual property, some group project repositories will not be made publicly available.
    </div>

    <!-- Cards -->
    <div class="mx-5 white-background">
      <div class="card-deck mx-2 py-4">
        <!-- eslint-disable -->
        <div class="card mb-4" v-for="(project, index) in projects"
          :key="project.name"
          data-aos= "flip-left"
          :data-aos-delay= project.offset
        >
          <!-- card header -->
          <img class="card-img-top" :src="images[index][0]" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title text-center">{{ project.name }}</h5>
            <hr class="py-0 mt-0"/>
            <p class="card-text">{{ project.description }}</p>
          </div>

          <!-- card buttons -->
          <div v-for="button in project.buttons">
            <!-- view images -->
            <button class="btn btn-dark btn-block mt-0 mb-2"
              v-if="button === 'View Images'"
              data-toggle="modal" 
              data-target="#Modal"
              @click="resetCarousel(index)">
              <i class="fas fa-images"></i> {{ button }}
            </button>
            <!-- info -->
            <button class="btn btn-light btn-block mt-0 mb-2"
              v-if="button === 'Info'"
              data-container="body" 
              data-toggle="popover" 
              data-placement="bottom"
              data-trigger="focus"
              :title="project.popoverTitle" 
              :data-content="project.popoverInfo">
              <i class="fas fa-info-circle"></i> {{ button }}
            </button>
            <!-- download -->
            <button class="btn btn-info btn-block mt-0 mb-2"
              v-if="button === 'Download'"
              @click="downloadAgario">
              <i class="fas fa-file-download"></i> Download Files
            </button>
          </div>

          <!-- card footer -->
          <div class="card-footer">
            <small class="text-muted">{{ project.frameworks | joinArray }}</small>
          </div>
        </div>
      </div>

      <div class="pb-4 d-flex justify-content-center">
        <button class="btn btn-lg btn-outline-primary mx-2" 
          v-if="this.numberOfProjects > 4" 
          @click="showLessProjects">
            Show Less
        </button>
        <button class="btn btn-lg btn-primary mx-2" 
          v-if="this.numberOfProjects < this.allProjectsLength" 
          @click="showMoreProjects">
            Show More
        </button>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">

            <div class="modal-header">
              <h3 class="modal-title mx-auto" id="ModalLabel">{{ projects[i].name }}</h3>
            </div>

            <div class="modal-body">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators w-25 mx-auto bg-dark rounded">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"/>
                  <li 
                    v-for="(image, index) in images[i]" 
                    v-if="index != 0"
                    data-target="#carouselExampleIndicators" 
                    :data-slide-to="index"
                  />
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" :src="images[i][0]" alt="First slide">
                  </div>
                  <div 
                    v-for="(image, index) in images[i]" 
                    v-if="index != 0"
                    class="carousel-item"
                  >
                    <img class="d-block w-100" :src="image" alt="First slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon carousel-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon carousel-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-outline-danger btn-large btn-block w-50 mx-auto" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-5">
      <i class="fas fa-chevron-down arrow bounce" v-scroll-to="'#resume'"></i>
    </div>
    <span id="projectBottomPage"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import fileDownload from 'js-file-download';
  import allProjects from './projects.json'

  /* eslint-disable */
  export default {
    data(){
      return {
        i: 0,
        numberOfProjects: 4,
        incrementProjectsBy: 4,
        decrementProjectsBy: 4,
        projects: [],
        allProjects,
        allProjectsLength: 0,
        images: [[
            require("../../assets/gatorlist/gatorlist1.png"),
            require("../../assets/gatorlist/gatorlist2.png"),
            require("../../assets/gatorlist/gatorlist3.png"),
            require("../../assets/gatorlist/gatorlist4.png"),
            require("../../assets/gatorlist/gatorlist5.png"),
            require("../../assets/gatorlist/gatorlist6.png"),
          ],[
            require("../../assets/agario/agario1.png"),
            require("../../assets/agario/agario2.png"),
            require("../../assets/agario/agario3.png"),
            require("../../assets/agario/agario4.png"),
            require("../../assets/agario/agario5.png"),
          ],[
            require("../../assets/api/api1.png"),
            require("../../assets/api/api2.png"),
            require("../../assets/api/api3.png"),
            require("../../assets/api/api4.png"),
            require("../../assets/api/api5.png"),
          ],[
            require("../../assets/rps/rps1.png"),
            require("../../assets/rps/rps2.png"),
            require("../../assets/rps/rps3.png"),
            require("../../assets/rps/rps4.png"),
          ],[
            require("../../assets/titanic/titanic1.png"),
            require("../../assets/titanic/titanic2.png"),
          ],[
            require("../../assets/spookyAuthor/spookyAuthor1.png"),
            require("../../assets/spookyAuthor/spookyAuthor2.png"),
            require("../../assets/spookyAuthor/spookyAuthor3.png"),
          ],[
            require("../../assets/searchEngines/searchEngines1.png"),
            require("../../assets/searchEngines/searchEngines2.png"),
            require("../../assets/searchEngines/searchEngines3.png"),
          ],[
            require("../../assets/shell/shell1.png"),
          ],[
            require("../../assets/tankWars/tankWars1.png"),
            require("../../assets/tankWars/tankWars2.png"),
            require("../../assets/tankWars/tankWars3.png"),
            require("../../assets/tankWars/tankWars4.png"),
            require("../../assets/tankWars/tankWars5.png"),
          ],[
            require("../../assets/galacticMail/galacticMail1.png"),
            require("../../assets/galacticMail/galacticMail2.png"),
            require("../../assets/galacticMail/galacticMail3.png"),
          ]]
      }
    },
    methods: {
      resetCarousel(index){
        // i correlates to index of images
        this.i = index;
        // reset carousel -> not all projects have same # of images
        $('.carousel').carousel(0); 
      },
      enablePopover() {
        // show popover enabling html parsing
        $('[data-toggle="popover"]').popover({html:true});
      },
      downloadAgario() {
        axios({
          url: '/downloadAgario',
          method: 'GET',
          responseType: 'blob',
        }).then(res => {
          fileDownload(res.data, 'agario.zip');
        }).catch(err => {
          console.log(err);
        })
      },
      showMoreProjects(){
        // index out of bounds checking
        var newNumberOfProjects = Math.min(this.numberOfProjects + this.incrementProjectsBy, this.allProjectsLength)

        // append to existing array, rather than clearing the entire array and rewriting everything 
        for(var i = this.numberOfProjects; i < newNumberOfProjects; i ++){
          this.projects.push(this.allProjects[i])
        }
        // update length
        this.numberOfProjects = newNumberOfProjects
      },
      showLessProjects(){
        // since project section becomes smaller, scroll up a bit
        // screen size detection
        if( window.innerWidth <= 575) {
          if (this.numberOfProjects === 10)
            this.$scrollTo('#projectBottomPage', 0, {offset:-window.innerHeight * 2})
          else
            this.$scrollTo('#projectBottomPage', 0, {offset:-window.innerHeight * 3.5})
        }else if (window.innerWidth <= 991)
          if (this.numberOfProjects === 10)
            this.$scrollTo('#projectBottomPage', 0, {offset:-window.innerHeight * 1.5})
          else
            this.$scrollTo('#projectBottomPage', 0, {offset:-window.innerHeight * 2})
        else{
          this.$scrollTo('#projectBottomPage', 0, {offset:-window.innerHeight * 1.5})
        }

        
        // ideally, the browser will always show 4 projects per row
        // showing less projects should remove the last row, assuming 4 projects exist per row
        switch(this.numberOfProjects % 4){
          case 0: 
            this.decrementProjectsBy = 4
            break;
          case 1: 
            this.decrementProjectsBy = 1
            break;
          case 2:
            this.decrementProjectsBy = 2
            break
          default:
            this.decrementProjectsBy = 3
        }

        // pop from array
        for (var i = this.numberOfProjects; i > this.numberOfProjects - this.decrementProjectsBy; i--){
          this.projects.pop()
        }
        // update length
        this.numberOfProjects -= this.decrementProjectsBy

        // i corresponds to the image index, this always has to be less than length of projects
        // otherwise, modal will try to display an image on a project that does not exist!
        if (this.i >= this.numberOfProjects){
          this.i -= this.numberOfProjects
        }
      },
    },
    filters: {
      joinArray(value) {
        if (!value) return
        return value.join(' - ');
      }
    },
    created(){
      this.allProjectsLength = this.allProjects.length
      for(var i = 0; i < this.numberOfProjects; i++){
        this.projects.push(this.allProjects[i])
      }
    },
    mounted() {
      // show popover enabling html parsing
      $('[data-toggle="popover"]').popover({html:true});
    },
    updated() {
      this.enablePopover()
    },
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
  .card-columns .card {
    display: inline-block;
    width:100%;
  }

  .carousel-icon{
    background-color: black;
    border-radius: 25%;
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
    md: 2,
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