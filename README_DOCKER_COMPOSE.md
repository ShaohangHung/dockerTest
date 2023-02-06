# docker-compose is a tool that can execute the cmd of dockerfile. The file extension is ".yml".

# docker-compose up -p 
### -p name the container prefix
```
docker-compose up -p myproject up -d 
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