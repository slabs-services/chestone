FROM nginx:latest

WORKDIR /etc/nginx
COPY nginx-configs/nginx.conf ./nginx.conf
COPY nginx-configs/chestone.conf ./conf.d/default.conf