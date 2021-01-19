FROM node:alpine

WORKDIR app/
COPY . .
RUN npm install && \
  mkdir files && \
  cd files && touch logs.txt && cd .. && \
  mkdir pongs && cd pongs && touch pongs.txt && cd ..

EXPOSE 3003
CMD ["npm", "start"]