FROM node:23.11.0-alpine
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["node", "src/server.js"]
EXPOSE 8080