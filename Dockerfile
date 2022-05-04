FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \p
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm i && npm update && npm i ffmpeg && npm i -g pm2 && pm2 start main.js && pm2 save && pm2 monit

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
