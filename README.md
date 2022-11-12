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
docker run -p 3000:3000 test:v4
```
