FROM oven/bun:latest AS build

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .
RUN bun run build


FROM oven/bun:latest
WORKDIR /app

COPY --from=build /app/build /app/package.json /app/bun.lockb ./
RUN bun install --production --ignore-scripts
# Required by svelte-adapter-bun (for whatever reason)
RUN bun install devalue cookie set-cookie-parser --ignore-scripts

ENTRYPOINT ["bun", "index.js"]
