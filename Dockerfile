FROM node:12.18 as development

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:12.18-alpine as production

RUN apk add curl bash

COPY --from=development /usr/src/app ./

EXPOSE 3000 9229

CMD ["node","--inspect-brk=0.0.0.0:9229", "dist/main"]
