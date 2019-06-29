<template>
  <div>
    <Navbar/>
    <Home/>
    <About class="padding-top overflow"/>
    <Projects class="padding-top"/>
    <Resume class="padding-top"/>
    <Contact class="padding-top overflow"/>
  </div>
</template>

<script>
  import Navbar from './Navbar';
  import Home from './Home';
  import About from './About';
  import Projects from './Projects';
  import Resume from './Resume';
  import Contact from './Contact';
  import AOS from 'aos';

  export default {
    components: {
      Home,
      Navbar,
      About,
      Projects,
      Resume,
      Contact,
    },
    mounted(){
      AOS.refresh();
    }
  }
</script>

<style>
  html, body{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    /* font-family: 'Abhaya Libre', serif !important; */
  }
  .overflow{
    overflow-x: hidden;
  }
  .padding-top{
    padding-top: 75px;
  }
  .arrow:hover{
    cursor: pointer;
    animation-duration: 1.5s;
  }
  .bounce {
    animation-name: bounce;
    animation-timing-function: ease;
  }
  @keyframes bounce {
    0%   { transform: scale(1,1) translateY(0); }
    10%  { transform: scale(1,1) translateY(-10px); }
    30%  { transform: scale(1,1) translateY(0); }
  }
</style>
