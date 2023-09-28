FROM alpine
RUN apk update
RUN apk --update add nodejs npm
COPY package.json .
COPY . .
RUN npm install
RUN npm install @esbuild/linux-arm64
EXPOSE 7053:7053
CMD npm run astro dev --host
