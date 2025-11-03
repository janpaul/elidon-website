FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# 2. Build app
COPY . .
RUN npm run build

# 3. Production image
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start"]