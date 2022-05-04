FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \p
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN node .

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
