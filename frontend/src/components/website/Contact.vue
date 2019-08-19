<template>
  <div id="contact">
    <div>
      <h2 class="display-4 text-center mb-0">Contact</h2>
      <hr class="bg-white w-50"/>
      <p class="w-50 mx-auto text-center lead">
        Send me an Email:
      </p>
      <div v-if="loading" class="d-flex justify-content-center">
        <hollow-dots-spinner
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          color="#007bff"
        />
      </div>
    </div>

    <form class="container pb-5" @submit.prevent="onSend" 
      data-aos="zoom-out-up" 
      data-aos-easing="ease" 
      data-aos-duration="600"
      data-aos-offset="100">
      <!-- missing info alert -->
      <transition appear enter-active-class="animated shake">
        <div v-if="missingInfo" class="alert alert-warning py-0" role="alert">
          {{missingInfoText}}
        </div>
      </transition>

      <div class="form-group">
        <label for="name">Name</label>
        <input type="name" class="form-control" id="name" placeholder="Enter Name" v-model='name'>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model='email'>
      </div>
      <br/>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" class="form-control" id="subject" placeholder="Subject" v-model='subject'>
      </div>
      <div class="form-group">
        <label for="text-area">Message</label>
        <textarea class="form-control" id="text-area" rows="5" placeholder="..." v-model='message'></textarea>
      </div>
      <button type="submit" class="btn btn-primary mb-4"><i class="far fa-paper-plane"></i> Send Mail </button>
    </form>
    
    <div class="text-center pb-4">
      <a href="https://github.com/Vmunoz94" target="_blank" class="mx-1">
        <i class="fab fa-github icons"></i>
      </a>
      <a href="https://hub.docker.com/u/vmunoz94" target="_blank" class="mx-1">
        <i class="fab fa-docker icons"></i>
      </a>
      <a href="https://www.linkedin.com/in/victor-munoz-b2227a59/" target="_blank" class="mx-1">
        <i class="fab fa-linkedin icons"></i>
      </a>
      <a href="mailto:victormunozresume@gmail.com" class="mx-1">
        <i class="fas fa-envelope icons mx-1"></i>
      </a>
      <hr class="bg-white w-50"/>
    </div>

    <footer class="mx-2 pb-2 d-flex justify-content-end">
      <span class="pr-2">
      View Website Code ->
      </span>
      <a href="https://github.com/Vmunoz94/resumeWebsite-v2" target="_blank">
        <i class="fas fa-code icons"></i>
      </a>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
  import axios from 'axios';
  import { HollowDotsSpinner } from 'epic-spinners'

  export default {
    data() {
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
        missingInfo: false, 
        missingInfoText: "Test",
        loading: false, 
      }
    },
    components: {
      HollowDotsSpinner,
    },
    methods: {
      onSend(){
        this.missingInfo = false;
        this.missingInfoText = "";

        if (!this.name){
          this.missingInfoText += '* Enter Name\n';
          this.missingInfo = true;
        }
        if (!this.email){
          this.missingInfoText += '* Enter Email\n';
          this.missingInfo = true;
        }
        if (!this.subject){
          this.missingInfoText += '* Enter Subject\n';
          this.missingInfo = true;
        }
        if (!this.message){
          this.missingInfoText += '* Enter Message\n';
          this.missingInfo = true;
        }

        if(!this.missingInfo){
          this.loading = true;
          axios.post('/send', {
            name: this.name,
            email: this.email,
            subject: this.subject, 
            message: this.message,
          }).then(res => {
            this.loading = false;
            if (res.data === "Email Sent Successfully"){
              alert("Email Sent Successfully!")
            } else {
              alert("ERROR Sending Email, Sorry!")
            }
          }).catch(err => {
            this.loading = false;
            alert("ERROR Sending Email, Sorry!")
            console.log(err);
          });
        }
      }
    }
  }
</script>

<style scoped>
  #contact{
    /* background-color: rgb(63, 63, 63); */
    /* background-color: rgb(97, 99, 104); */
    background-color: rgb(48, 50, 54);
    color: white;
  }
  form{
    max-width: 500px;
  }
  .icons{
    font-size: 25px;
  }
  a, i{
    color: white;
  }
  a, i:hover{
    color: #007bff;
  }
  small{
    color: red !important;
  }
  .alert{
    white-space: pre-line;
  }
</style>