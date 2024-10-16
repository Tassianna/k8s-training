FROM nginx:latest

WORKDIR /app 
COPY ./website/index.html /usr/share/nginx/html/index.html

COPY ./nginx/nginx.conf /etc/nginx/sites-available/default