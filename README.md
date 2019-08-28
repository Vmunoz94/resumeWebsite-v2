# Hello, Welcome to My Website!
I've tried to keep everything as organized as possible so all backend and frontend code are in their appropriate folders. The frameworks being used are Node and Express for the backend and Vue for the frontend. Lastly, I dockerized each microservice into its own container and opened up one Amazon EC2 instance which is running my applications in Docker swarm mode. 

## Guide:
To start off, I broke everything up into microservices. This is helpful because it forces modularity, meaning that each service is focused on doing one task alone. If that task happens to fail, then it would be easier to pinpoint the problem when everything is modular rather than monolithic. An added bonus to modularity is that the other services will not crash because of it. 

- ### Frontend - [link](https://github.com/Vmunoz94/resumeWebsite-v2/tree/master/frontend)
> The entire frontend application is listening on __PORT 8080__. <br/>
> Bootstrap is being used for styling. <br/>
> AOS, Animate.CSS, and EpicSpinners are used for animations. <br/>
> Vue-lazyload is used for small performance gain. It helps lazy load images that don't need to be on screen yet. <br/>
> Axios is being used to make HTTP requests to my backend API endpoints, such as sending an email and downloading files. 

- ### Backend - [link](https://github.com/Vmunoz94/resumeWebsite-v2/tree/master/backend)
> The backend consists of the gateway and my API services such as sending emails and downloading files. <br/>
> The gateway is listening on __PORT 4000__ and its purpose is too correctly proxy all incoming requests to their appropriate ports. <br/>
> One of my API endpoints is download, which is listening on __PORT 5000__. The download service is reponsible for downloading pdf and zip files. <br/>
> The second API endpoint is send, which is listening on __PORT 6000__. The responsiblity of this service is to send emails based on the information provided in the Contact section from the frontend.

- ### DevOps - [link](https://github.com/Vmunoz94/resumeWebsite-v2/tree/master/devops)
> I'm using Docker to containerize each of my four services; frontend, gateway, download, and send.<br/>
> For each one of my services, I have to build an image that is used as a blueprint explaining what is needed to be installed and how to run that particular service. <br/>
> The three backend services are all built similarly; however, the frontend service has to be built in production mode and is being served using NGINX. <br/>
> Some of the benefits of running an application in Docker Swarm mode is that you can easily scale your application horizontally rather than vertically. The swarm manager has an internal load balancer, which will efficiently distribute requests to each service. This is something I don't really take advantage of in this project but was crucial when developing the Agar.io Clone. 

- ### Hosting
> A huge benefit of using Docker is that once all the images are created and pushed to Docker Hub, I am able to run my application on any computer whether or not that computer has the necessary dependencies installed. <br/>
> When starting a new AWS EC2 instance, all I had to install was Docker and copy over my Docker-Compose file to the newly created EC2 instance. <br/>
> AWS Certificate Manager was used to get an SSL Certificate for my domain name. <br/>
> AWS Route 53 is used to point my domain name to an AWS load balancer, which points to my EC2 instance. <br/>
> The AWS load balancer is listening on __PORTS 80 and 443__ and is needed to connect an Amazon SSL certificate.

## Model:
![Website Model](/websitemodel.png)

<br/>
<br/>
<br/>
<br/>

#### Docker Notes:
<!-- build dockerfile image -->
$ docker build -f dockerfiles/Dockerfile.debug -t myapp_debug .

<!-- run docker image -->
$ docker run -d -p 3000:3000 express-demo

<!-- stop docker container -->
$ docker container stop <container id>

<!-- push to dockerhub -->
$ docker tag 349f2af2a827 vmunoz94/express-demo:latest  
$ docker push vmunoz94/express-demo:latest

## Creating a stack
First enter swarm mode.
```
$ docker swarm init
```
Then deploy the stack with a name.
```
$ docker stack deploy -c docker-compose.yml swarm-demo
```
save the output so that more machines can join later
> docker swarm join --token xxx

To take down the stack
```
$ docker stack remove swarm-demo
```

Then leave the swarm
```
docker swarm leave --force
```
