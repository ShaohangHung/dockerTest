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

```
docker run --name test -p 3000:3000 -d test:v6
```

## enter the container
```
 docker exec -it test bash
```