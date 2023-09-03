FROM node:latest AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:latest
WORKDIR /app
COPY --from=build app/package.json app/package-lock.json ./
RUN npm ci --omit dev

COPY --from=build /app/build .

EXPOSE 3000
ENTRYPOINT ["node", "."]