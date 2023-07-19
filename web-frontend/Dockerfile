FROM node:18 AS release

WORKDIR /

EXPOSE 4000

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]