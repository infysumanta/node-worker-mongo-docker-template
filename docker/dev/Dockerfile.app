FROM node:20-alpine

WORKDIR /app

COPY app/package*.json /app

RUN npm install

COPY app/src /app/src

CMD ["npm", "run", "dev"]