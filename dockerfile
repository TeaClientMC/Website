FROM node:18 AS runtime
WORKDIR /sites/TeaClient
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npm astro dev --host
EXPOSE 3000