<template>
  <div class="container-fluid">
    <div class="row">
            <!-- Left Half -->
            <div class="col-sm-4 bg-dark p-0 text-white">
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
                    <p><a href='mailto:victormunozresume@gmail.com'>VictorMunozResume@gmail.com</a></p>

                    <h6 class="mb-0">
                        <i class="far fa-window-maximize"></i> Portfolio:
                    </h6>
                    <p><a href='https://VictorMunoz.io' ta='_blank'>https://VictorMunoz.io</a></p>

                    <h6 class="mb-0">
                        <i class="fab fa-linkedin-in"></i> LinkedIn:
                    </h6>
                    <p><a href='https://linkedin.com/in/vmunoz94/' ta='_blank'>https://linkedin.com/in/vmunoz94/</a></p>

                    <h6 class="mb-0">
                        <i class="fab fa-github"></i> GitHub:
                    </h6>
                    <p><a href='https://github.com/Vmunoz94' ta='_blank'>https://github.com/Vmunoz94</a></p>
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
            <div id="right-half" class="col-sm-8 bg-white">
                <div class="right-half-padding"></div>
                <hr class="style-two m-0">
                <section>
                    <h5 class="text-dark pl-5 py-2 m-0">Projects</h5>
                </section>
                <hr class="style-two m-0">
                <div class="pl-5 py-3 mr-4">
                    <p class="m-0 pl-0"><strong>GatorList</strong> - (Apartment Finder)<strong>:</strong></p>
                    <p class="m-0 pl-3"><em>Full stack web development project utilizing Laravel and Vue.js framework for</em></p>
                    <p class="mb-1 pl-3"><em>CSC 648 (Software Engineering)</em></p>
                    <div class="border-left border-dark mb-2 ml-3 pr-4">
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Create a fully functional website where SFSU students can easily look for housing.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">As the frontend lead, I coordinated and communicated with my teammates to ensure product delivery.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Designed and developed all website pages/routes.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Proposed new ideas and features to make our application stand out from competitors.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Set up Vue, Vue-Router, VueX and communicated with backend lead to establish all proper API endpoints.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Integrated 3rd party API’s such as Google Maps and reCaptcha.</span></p>
                    </div>

                    <p class="m-0 pl-0"><strong>Agar.io-Clone</strong> - (Multiplayer Game)<strong>:</strong></p>
                    <p class="mb-1 pl-3"><em>Full stack web development project created using Node/Express and React framework for CSC 667 (Internet Applications)</em></p>
                    <div class="border-left border-dark mb-2 ml-3 pr-4">
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Re-create “Agaro.io” using websockets, Redis, MondoDB, React, and Docker.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Co-developed the skeletal template and game logic that will be used by our teammates to build upon, placed a huge emphasis on following Microservice Architecture.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Designed the home page making sure to keep it simple, easy, and attractive for users.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Integrated teammate’s user login/register task into the home page.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Implemented websockets in order to share player locations with every client.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Dockerized application for easy horizontal scaling.</span></p>
                    </div>

                    <p class="m-0 pl-0"><strong>Topic Modeling</strong> - (Artificial Intelligence)<strong>:</strong></p>
                    <p class="m-0 pl-3"><em>Kaggle Python project developed in Jupyter Notebooks for</em></p>
                    <p class="mb-1 pl-3"><em>CSC 849 (Search Engines)</em></p>
                    <div class="border-left border-dark mb-2 ml-3 pr-4">
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Tackle the Spooky Author Identification challenge on Kaggle, which was to successfully predict authors from excerpts of novels from Mary Shelley, Edgar Allan Poe, and H.P. Lovecraft.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Preprocessed the 20,000 datasets before training the model. This included tokenization, lemmatization, and stopword removal.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Calculated coherence score in order to determine the correct number of topics LDA should produce.</span></p>
                        <p class="col m-0 pl-3 clearfix">&bull; <span class="float">Mapped each topic to specific author.</span></p>
                    </div>
                </div>

                <hr class="style-two m-0">
                <section>
                    <h5 class="text-dark pl-5 py-2 m-0">Education</h5>
                </section>
                <hr class="style-two m-0">
                <div class="pl-5 py-3">
                    <p class="m-0 pl-0"><strong>San Francisco State University:</strong></p>
                    <p class="m-0 pl-3"><em>Bachelor of Science in Computer Science</em> - (Recent Graduate)</p>
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
                <div class="pl-5 py-3 right-half-padding-bottom">
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

a{
    color: inherit;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}

/*Right Half*/
.right-half-padding{
    padding-top: 100px;
}
.right-half-padding-bottom{
    margin-bottom: 25px;
}

hr.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.text-align{
    text-align: justify;
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
.float{
    float: right;
    width: 97%;
}
.clearfix{
    overflow: auto;
}

/* style sheet for "letter" printing */
@media print{
    @page {
        size:letter;
        margin: 0;
    }
}
</style>