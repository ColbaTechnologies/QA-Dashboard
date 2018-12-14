FROM node:10-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:10-alpine
WORKDIR /usr/src/app
EXPOSE 3000
RUN npm install serve -g
COPY --from=build /usr/src/app/build .
CMD ["serve", "-p", "3000"]
