FROM node:alpine
# Here you have to find a way to include db.json in the container

RUN npm i -g json-server

COPY ./db.json /app/db.json

EXPOSE 3000

WORKDIR /app
# The final command is 
CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0", "--port", "3000"]