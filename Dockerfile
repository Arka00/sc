FROM node:lts-buster
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \*
COPY package.json .0
RUN npm install && npm install qrcode-terminal && npm install pm2 -g 
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
