FROM node:20

WORKDIR /imdb

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm","start" ]