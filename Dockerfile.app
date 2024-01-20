FROM node:20

WORKDIR /app

COPY app/package*.json /app

RUN npm install

COPY app/src /app/src

CMD ["npm", "run", "start"]