FROM node:12.18.4-alpine3.12
WORKDIR /home/node/app
EXPOSE 3333
COPY . /home/node/app
RUN npm i
ENTRYPOINT ["npm","start"] 