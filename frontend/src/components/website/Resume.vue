
<template>
  <div id="resume">
    <header class="mb-4">
      <div class="display-4 text-center">Resume</div>
      <hr class="w-75"/>
    </header>

    <!-- image -->
    <img v-lazy="require('../../assets/Resume.jpg')" alt="resume" class="img-thumbnail mx-auto d-block rounded w-75 mb-4">

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
      // openNewTab(){
      //   window.open('resume', '_blank');
      // },
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
#resume{
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2.5px);
}
img{
  max-width: 800px;
  transition: all 0.2s ease;
  opacity: 1;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .75);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    0px 0px 10px 0px rgba(0, 0, 0, .75);  /* Firefox 3.5 - 3.6 */
  box-shadow:         0px 0px 10px 0px rgba(0, 0, 0, .75);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
button{
  margin: 0 25px;
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