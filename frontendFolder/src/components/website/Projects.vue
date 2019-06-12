<template>
  <div id="project">
    <header class="mb-5">
      <h2 class="display-4 text-center">Projects - THIS SECTION IS WORK IN PROGRESS</h2>
      <hr class="w-75 my-0"/> 
    </header>

    <div class="mx-4 pb-4 white-background">
      <div class="card-deck mx-2 py-4">
        <div class="card">
          <img class="card-img-top" src="#" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="#" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="#" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="#" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      <div class="text-center">
        <i class="fas fa-arrow-left left-right-arrows mx-5"></i>
        <i class="fas fa-arrow-right left-right-arrows mx-5"></i>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-5">
      <i class="fas fa-chevron-down arrow bounce" v-scroll-to="'#resume'"></i>
    </div>
  </div>
</template>

<style scoped>
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
</style>