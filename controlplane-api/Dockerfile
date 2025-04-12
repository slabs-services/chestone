FROM node:23.11.0-alpine
WORKDIR /app
COPY . .
COPY .env.docker .env
RUN npm install
RUN chmod +x entrypoint.sh
CMD ["/bin/sh", "entrypoint.sh"]
EXPOSE 8080