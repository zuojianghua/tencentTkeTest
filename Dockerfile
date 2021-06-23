FROM node:12.18.4-alpine3.12 AS nbuild
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm i && npm run build

FROM node:12.18.4-alpine3.12
WORKDIR /home/node/app
EXPOSE 3333
COPY --from=nbuild /home/node/app /home/node/app
ENTRYPOINT ["npm","start"] 