FROM node:alpine

WORKDIR app/
COPY . .
RUN npm install && mkdir files && cd files && touch logs.txt && cd ..

EXPOSE 3004
CMD ["npm", "start"]