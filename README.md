# What is Docker?
Docker是一種快速打包的技術，具備標準化、輕量、易移植的優點

# Docker VS VM
![title](./pictures/Container%20vs%20VM.png)


# Docker CMD (Container)

## Docker run

### --name container name

### -d run container in background

### -p outsideport:containerport

```
docker run --name test -p 3000:3000 -d test:v6
```

## Watch container's log

### -f keep refresh

```
docker logs test -f
```

## Enter the container

```
docker exec -it test bash
```

## stop container for a batch
```
docker stop id1 id2 id3
```

## rm container for a batch
```
docker rm $(docker container ps -aq)
```

## delete useless containers and images
```
docker system prune -a -f
```

# Docker CMD (Image)

## Remove all images

```
docker rmi $(docker images -q)
```

## Dockerfile build

### --no-cache clear the cache

### -t tag

### -f find the Dockerfile you want to build with

### --build-env change a parameter's value

```
docker build --no-cache -t test:v8 -f docker/Dockerfile --build-env VERSION=2.0.0 .
```

## Push image to docker hub

### 1. make image name be your dockerhub's repository and tag.

```
docker tag test howardhung/test:v8
```

### 2. docker login

```
docker login
```

### 3. docker push

```
docker push howardhung/test:v8
```
## Pull image from docker hub
```
docker pull howardhung/test:v8
```

## export a image
### -o output file name
```
docker save howardhung/test:v8 -o test.image
```

## import a image
### -i input file name
```
docker load -i ./test.image
```