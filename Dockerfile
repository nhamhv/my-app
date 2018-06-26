FROM node:8.11.3

ADD package.json /tmp/package.json

RUN cd /tmp && npm install

RUN mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src

ADD . /src

EXPOSE 3000
