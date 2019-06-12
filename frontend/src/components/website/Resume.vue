
<template>
  <div id="resume" class="mb-2">
    <div class="container-fluid m-0">
      <header class="mb-4">
        <div class="display-4 text-center">Resume</div>
        <hr class="w-75"/>
      </header>

      <!-- image -->
      <img src="../../assets/Resume.png" alt="resume" class="img-thumbnail mx-auto d-block rounded w-75 mb-4" 
      data-aos="zoom-in" 
      data-aos-easing="ease" 
      data-aos-duration="600"
      data-aos-offset="0"
      @click="openNewTab">

      <!-- buttons -->
      <div>
        <span class="text-right float-right d-flex align-items-end justify-content-end mt-4">
          <button class="btn btn-lg btn-dark" @click="download"> <i class="fas fa-file-download"></i> Download PDF</button>
        </span>
        
        <span class="d-flex justify-content-end middle">
          <i class="fas fa-chevron-down arrow bounce text-dark" v-scroll-to="'#contact'"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import axios from 'axios';
  import fileDownload from 'js-file-download';

  export default {
    methods: {
      openNewTab(){
        window.open('resume', '_blank');
      },
      download(){
        axios({
          url: '/download',
          method: 'GET',
          responseType: 'blob',
        }).then(res => {
          fileDownload(res.data, 'Resume.pdf');
        }).catch(err => {
          console.log(err);
        })
      }
    },
  }
</script>

<style scoped>
#resume{
}
img{
  max-width: 750px;
  transition: all 0.2s ease;
  opacity: 1;
}
img:hover{
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  /* transform: scale(1.01); */
  cursor: pointer;
  /* filter: brightness(0.6);
  -webkit-filter: brightness(0.6); */
}
.arrow{
  top: 140%;
  color: black;
  font-size: 75px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}
.middle{
  width: 52.3%;
}
</style>