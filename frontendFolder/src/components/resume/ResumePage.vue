<template>
  <div class="container-fluid shrink">
    <div class="row">
            <!-- Left Half -->
            <div class="col-4 bg-dark p-0 text-white">
                <div class="pl-5 pt-3">
                    <h1 id="name" class="display-4 mb-0">Victor</h1>
                    <h1 id="name" class="display-4">Muñoz</h1>
                    <p class="pl-0"> Bachelor of Science in Computer Science </p>
                </div>

                <section id="personal-info" class="bg-white text-dark pl-5 py-2 rounded-right">
                    <h5 class="mb-0"> Personal Info</h5>
                </section>
                <div class="pl-5 pt-3">
                    <h6 class="mb-0">
                        <i class="fas fa-home"></i> Address:
                    </h6>
                    <p>San Francisco Bay Area, CA</p>

                    <h6 class="mb-0">
                        <i class="fas fa-mobile-alt"></i> Phone:
                    </h6>
                    <p>(510) 734-0433</p>

                    <h6 class="mb-0">
                        <i class="far fa-envelope"></i> G-mail:
                    </h6>
                    <p>VictorMunozResume@gmail.com</p>

                    <h6 class="mb-0">
                        <i class="far fa-window-maximize"></i> Website:
                    </h6>
                    <p>https://www.VictorMunoz.io</p>
                </div>

                <section id="proficient" class="bg-white text-dark pl-5 py-2 rounded-right">
                    <h5 class="mb-0"> Programming Languages</h5>
                    <h5 class="mb-0"> (Proficient)</h5>
                </section>
                <div class="pl-5 pt-3">
                    <p class="mb-0">Python</p>
                    <p>Javascript</p>
                </div>

                <section id="familiar" class="bg-white text-dark pl-5 py-2 rounded-right">
                    <h5 class="mb-0"> Programming Languages</h5>
                    <h5 class="mb-0"> (Familiar)</h5>
                </section>
                <div class="pl-5 pt-3">
                    <p class="mb-0">HTML/CSS</p>
                    <p class="mb-0">C/C++</p>
                    <p class="mb-0">Java</p>
                    <p>SQL</p>
                </div>
                
                <section id="skills" class="bg-white text-dark pl-5 py-2 rounded-right">
                    <h5 class="mb-0">Skills</h5>
                </section>
                <div class="pl-5 pt-3">
                    <p class="mb-0"> React / Vue</p>
                    <p class="mb-0"> Bootstrap / Semantic UI</p>
                    <p class="mb-0"> Node.js / Express </p>
                    <p class="mb-0"> MongoDB / Redis </p>
                    <p class="mb-0"> Microservice Architecture </p>
                    <p class="mb-0"> Websocket </p>
                    <p> Docker </p>
                </div>

                <section id="languages" class="bg-white text-dark pl-5 py-2 rounded-right">
                    <h5 class="mb-0">Spoken Languages</h5>
                </section>
                <div class="pl-5 pt-3">
                    <p class="mb-0">English</p>
                    <p>Spanish</p>
                </div>

            </div>

            <!-- Right Half -->
            <div id="right-half" class="col-8 bg-white">
                <div class="right-half-padding"></div>
                <hr class="style-two m-0">
                <section>
                    <h5 class="text-dark pl-5 py-2 m-0">Projects</h5>
                </section>
                <hr class="style-two m-0">
                <div class="pl-5 py-3 mr-5">
                    <p class="m-0 pl-0"><strong>GatorList:</strong></p>
                    <p class="m-0 pl-3"><em>Full stack web development project utilizing the Laravel and Vue.js framework for CSC 648</em></p>
                    <p class="mb-1 pl-3"><em>(Software Engineering)</em></p>
                    <div class="border-left border-dark mb-2 ml-3 pr-5">
                        <p class="m-0 pl-3">
                            The goal of the project was to create a fully functional website where SFSU students can go and look for housing. 
                            This project consisted of seven people, in which I took on the role as the frontend lead and used Slack and Trello 
                            to distribute tasks accordingly to my team members. As the frontend lead, I set up a skeletal template to make the job easier for my teammates.
                            This included setting up Vue, Vue-Router, VueX and effectively/efficiently communicating with the backend lead to create proper API endpoints.
                        </p>
                        <!-- <p class="m-0 pl-3">The goal of the project was to create a fully functional website where SFSU students can go and look for housing.</p>
                        <p class="m-0 pl-3">This project consisted of seven people, in which I took on the role as the frontend lead and used Slack and Trello 
                            to distribute tasks accordingly to my team members.</p>
                        <p class="m-0 pl-3">As the frontend lead, I set up a skeletal template to make the job easier for my teammates.</p> 
                        <p class="m-0 pl-3">This included setting up Vue, Vue-Router, VueX and effectively/efficiently communicating with the backend lead to create proper API endpoints.</p> -->
                        <p class="m-0 pl-3">Used Google Maps:</p>
                        <p class="col m-0 pl-5">&bull; Distance Matrix API to calculate distance and commute time from a specified address to SFSU campus.</p>
                        <p class="col m-0 pl-5">&bull; Geocoding API to extract the latitude and longitude of a specified address to place a marker on google maps.</p>
                        <p class="col m-0 pl-5">&bull; Javascript API to draw an interactive map.</p>
                    </div>

                    <p class="m-0 pl-0"><strong>Agar.io-Clone:</strong></p>
                    <p class="m-0 pl-3"><em>This four person full stack web development project was created using Express and React framework for CSC 667</em></p>
                    <p class="mb-1 pl-3"><em>(Internet Applications)</em></p>
                    <div class="border-left border-dark mb-2 ml-3 pr-5">
                        <p class="m-0 pl-3">
                            The goal of the project was to re-create the immensely popular and addicting game "Agar.io".
                            Used vanilla canvas to draw elements on the screen and websockets/redis to properly broadcast player positions to everyone.
                            All game logic was done server side and used microservice architecture to prevent our entire application from crashing in case one backend service is down.
                            Dockerized our application to run in docker swarm mode, this guarantees our application will work on everyone's machines.
                        </p>
                        <!-- <p class="m-0 pl-3">The goal of the project was to re-create the immensely popular and addicting game "Agar.io".</p>
                        <p class="m-0 pl-3">Used vanilla canvas to draw elements on the screen and websockets/redis to properly broadcast player positions to everyone.</p>
                        <p class="m-0 pl-3">All game logic was done server side and used microservice architecture to prevent our entire application from crashing in case one backend service is down.</p>
                        <p class="m-0 pl-3">Dockerized our application to run in docker swarm mode, this guarantees our application will work on everyone's machines.</p> -->
                    </div>

                    <p class="m-0 pl-0"><strong>Topic Modeling:</strong></p>
                    <p class="m-0 pl-3"><em>Kaggle three person Python project developed in Jupyter Notebooks for CSC 849</em></p>
                    <p class="mb-1 pl-3"><em>(Search Engines)</em></p>
                    <div class="border-left border-dark mb-2 ml-3 pr-5">
                        <p class="m-0 pl-3">
                            The goal of the project was to tackle the Spooky Author Identification challenge on Kaggle.
                            The challenge was to successfully predict the authors from excerpts of novels from Mary Shelley, Edgar Allan Poe, and H.P. Lovecraft.
                            We split the project into three parts with each team member approaching the challenge with a different procedure.
                            My approach was to create a Latent Dirichlet Allocation model using Python's Gensim library.
                            This model generated a specified number of topics, which I then used to correlate to specific authors.
                        </p>
                        <!-- <p class="m-0 pl-3">The goal of the project was to tackle the Spooky Author Identification challenge on Kaggle.</p>
                        <p class="m-0 pl-3">The challenge was to successfully predict the authors from excerpts of novels from Mary Shelley, Edgar Allan Poe, and H.P. Lovecraft.</p>
                        <p class="m-0 pl-3">We split the project into three parts with each team member approaching the challenge with a different procedure.</p>
                        <p class="m-0 pl-3">My approach was to create a Latent Dirichlet Allocation model using Python's Gensim library.</p>
                        <p class="m-0 pl-3">This model generated a specified number of topics, which I then used to correlate to specific authors.</p> -->
                    </div>
                </div>

                <hr class="style-two m-0">
                <section>
                    <h5 class="text-dark pl-5 py-2 m-0">Education</h5>
                </section>
                <hr class="style-two m-0">
                <div class="pl-5 py-3">
                    <p class="m-0 pl-0"><strong>San Francisco State University:</strong></p>
                    <p class="m-0 pl-3"><em>Bachelor of Science in Computer Science</em></p>
                    <p class="m-0 pl-3"><em>Senior Electives Included:</em></p>
                    <div class="row">
                        <p class="col m-0 pl-5">&bull; Computer Networks</p>
                        <p class="col m-0">&bull; Introduction to Databases</p>
                    </div>
                    <div class="row">
                        <p class="col m-0 pl-5">&bull; Search Engines</p>
                        <p class="col m-0">&bull; Software Engineering</p>
                    </div>
                    <div class="row">
                        <p class="col m-0 pl-5">&bull; Internet Applications</p>
                        <p class="col m-0">&bull; Artificial Intelligence</p>
                    </div>
                </div>

                <hr class="style-two m-0">
                <section>
                    <h5 class="text-dark pl-5 py-2 m-0">Employment</h5>
                </section>
                <hr class="style-two m-0">
                <div class="pl-5 py-3">
                    <p class="m-0 pl-0"><strong>Olympic Club:</strong></p>
                    <p class="m-0 pl-3"><em>Outside Services (May 2013 - Present)</em></p>

                    <p class="m-0 pl-0"><strong>Impark:</strong></p>
                    <p class="m-0 pl-3"><em>Parking Attendent (June 2016 - September 2018)</em></p>
                </div>

            </div>
        </div>
  </div>
</template>

<style scoped>
.shrink {
  /* transform: scale(.9); */
  transform-origin: top left;
}
.col-4 {
    max-height: 1283px;
    height: 1283px !important;
}

/*Left Half*/
#name{
    font-weight:600;
    letter-spacing:.5rem;
}

.rounded-right {
    border-top-right-radius: .7rem !important;
    border-bottom-right-radius: .7rem !important;
}

div h1 + p{
    font-size:1.3rem;
}

section h5 {
    font-weight:500;
    letter-spacing: .1rem;
}

div h6 {
    font-weight: 600;
}

p{
    font-size: smaller;
    padding-left: 20px;
}

/*Right Half*/
.right-half-padding{
    padding-top: 50px;
}

hr.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

li {
    list-style: none;
    font-size: 15px;
}
li:before{
    content:"·";
    font-size: 2rem;
    vertical-align:middle;
    line-height:20px;
}
/* style sheet for "letter" printing */
@media print{
    @page {
        size:letter;
        margin: 0;
    }
}
</style>