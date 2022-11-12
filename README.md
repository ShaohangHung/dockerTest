### Docker Test

## Docker cmd

```
docker -h
```

## Dockerfile is not in src folder

```
docker build -t test:v4 -f docker/Dockerfile .
```

## Docker run
### --name container name
### -d run container in background
### -p outsideport:containerport
```
docker run --name test -p 3000:3000 -d test:v6
```

## enter the container
```
 docker exec -it test bash
```

## watch container's log
### -f keep refresh
```
docker logs test -f
```

### push image to docker hub
## add tag
## make image name be your dockerhub's repository and tag.
```
docker tag test howardhung/test:v8
```

## docker login
## docker push
```
docker push howardhung/test:v8
```