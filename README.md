<!-- build dockerfile image -->
$ docker build -f dockerfiles/Dockerfile.debug -t myapp_debug .

<!-- run docker image -->
$ docker run -d -p 3000:3000 express-demo

<!-- stop docker container -->
$ docker container stop <container id>

<!-- push to dockerhub -->
$ docker tag 349f2af2a827 bparra/express-demo:latest
$ docker push bparra/express-demo:latest

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