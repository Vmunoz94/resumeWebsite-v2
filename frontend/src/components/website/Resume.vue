
<template>
  <div id="resume" class="mb-2">
    <header class="mb-4">
      <div class="display-4 text-center">Resume</div>
      <hr class="w-75"/>
    </header>

    <!-- image -->
    <img v-lazy="require('../../assets/Resume.png')" alt="resume" class="img-thumbnail mx-auto d-block rounded w-75 mb-4" 
    data-aos="zoom-in" 
    data-aos-easing="ease" 
    data-aos-duration="800"
    @click="openNewTab">

    <!-- buttons -->
    <span class="d-flex justify-content-end">
      <button class="btn btn-lg btn-dark" @click="download"> <i class="fas fa-file-download"></i> Download PDF</button>
    </span>
    
    <span class="d-flex justify-content-center">
      <i class="fas fa-chevron-down arrow bounce text-dark" v-scroll-to="'#contact'"></i>
    </span>
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
          url: '/downloadResume',
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
img{
  max-width: 750px;
  transition: all 0.2s ease;
  opacity: 1;
}
img:hover{
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  cursor: pointer;
}

@media (max-width: 768px) {
  .btn {
    font-size:14px;
    padding:8px 12px;
  }
  .middle{
    width: 57%;
  }
}
</style>