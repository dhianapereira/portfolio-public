FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app/dist ./dist

USER node

EXPOSE 5000

CMD ["npx", "serve", "-s", "dist", "-l", "5000"]