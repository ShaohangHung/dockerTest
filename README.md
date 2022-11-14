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

# Docker CMD (Image)

## Remove all images

```
docker rmi $(docker images -q)
```

## Dockerfile build

### --no-cache clear the cache

### -t tag

### -f find the Dockerfile you want to build with

```
docker build --no-cache -t test:v8 -f docker/Dockerfile .
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