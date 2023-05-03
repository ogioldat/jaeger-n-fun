FROM node:18-alpine

ENV PY_SERVICE_URL="py-service:8080"

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
