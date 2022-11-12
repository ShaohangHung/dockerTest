# image來源
FROM node:latest

LABEL authors="howardhung1007@gmail.com"

# create a directory to hold the application code inside the image
WORKDIR /usr/src/app

# copy your package*.json to image
COPY package*.json ./

# cmd for image
# npm ci to use package-lock.json, fix the version
RUN npm ci

# bundle your app's source code inside the Docker image
COPY . .

RUN npm run build

# port
EXPOSE 3000

# cmd for docker start
# CMD ["npm", "run", "start"]
CMD ["node", "dist/main.js"]