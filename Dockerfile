FROM node:16

RUN mkdir /app
WORKDIR /app

COPY ./ .

RUN mv .env.production .env
RUN npm install

EXPOSE 80

CMD ["node", "."]
