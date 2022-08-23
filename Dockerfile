FROM node:12

COPY package.json ./
COPY gateway.js /

RUN npm install
CMD ["node", "/gateway.js"]