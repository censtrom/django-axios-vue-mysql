# build stage
FROM node:12 as build-stage
WORKDIR /blue/
COPY frontend/package.json /blue/
RUN npm cache verify
RUN npm install
COPY frontend /blue/
RUN npm run build

# production stage
FROM nginx:latest as production-stage
COPY nginx/prod.conf /etc/nginx/nginx.conf
COPY django/static /usr/src/blue/static/
COPY --from=build-stage /blue/dist /dist/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]