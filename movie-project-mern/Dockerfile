
FROM node:20-alpine AS build


WORKDIR ./


COPY package*.json ./


RUN npm install


RUN npm install -g serve


COPY . .


RUN npm run build


CMD ["serve", "-s", "build", "-l", "80"]
