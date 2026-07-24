FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY package*.json .npmrc ./
ARG GITHUB_PKG_AUTH_TOKEN
ARG GOOGLE_PKG_AUTH_TOKEN
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/.output ./.output
USER node
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
