FROM node
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY app ./
COPY .env ./
VOLUME ["/app/src", "/app/bin"]
CMD npm start
