# image source
# 1.choose a official Image
# 2.choose a fixed version tag
# 3.choose a smaller size image
FROM node:latest
ENV VERSION=1.0.1

LABEL authors="howardhung1007@gmail.com"

RUN echo "VERSION=$VERSION"

# create a directory to hold the application code inside the image
WORKDIR /usr/src/app

# bundle your app's source code inside the Docker image
COPY helloworld.js /usr/src/app/

# npm ci to use package-lock.json, fix the version
# RUN npm ci

# port
# EXPOSE 3000

# cmd for docker start
# CMD ["npm", "run", "start"]
CMD ["node", "helloworld.js"]