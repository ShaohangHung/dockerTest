# docker-compose is a tool that can execute the cmd of dockerfile. The file extension is ".yml".

# docker-compose up -p 
### -p name the container prefix
### -d run container in background

### --build compare with images and rebuild the image which has changed.

### --scale you can create more there same service as the number you set
```
docker-compose up -p myproject up -d --build --scale servicename=3
```

# docker-compose down

# docker-compose file specification example:
```
version: "9.2"

services:
    servicename:
        image:
        command:
        envirenment:
        volumes:
        networks:
        ports:
    servicename2:

volumes:

networks:
```