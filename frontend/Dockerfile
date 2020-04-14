FROM node:12

WORKDIR /frontend/
COPY package.json /frontend
RUN npm cache verify
RUN npm install
COPY . /frontend/
RUN npm run build
