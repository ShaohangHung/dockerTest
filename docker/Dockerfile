# image source
# 1.choose a official Image
# 2.choose a fixed version tag
# 3.choose a smaller size image
FROM node:latest
ENV VERSION=1.0.1

LABEL authors="howardhung1007@gmail.com"

# create a directory to hold the application code inside the image
WORKDIR /usr/src/app

# copy your package*.json to image
COPY package*.json ./

# bundle your app's source code inside the Docker image
COPY . .

# cmd for image
# npm ci to use package-lock.json, fix the version
RUN apt-get update && \
    apt-get install -y vim && \
    npm ci && \
    npm run build

    
# port
EXPOSE 3000

# cmd for docker start
# CMD ["npm", "run", "start"]
CMD ["node", "dist/main.js"]