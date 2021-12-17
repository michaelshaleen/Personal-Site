FROM node:15.13.0
WORKDIR /Desktop/personal-page
EXPOSE 8081
COPY package.json .
RUN npm install
COPY . /personal-page
CMD [ "node, src/index.js" ]

