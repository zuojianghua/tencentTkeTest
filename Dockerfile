FROM node:12.8.0
COPY . /home/node/app
RUN npm i
ENTRYPOINT ["npm","start"] 