FROM node:16

WORKDIR /app

COPY package.json package-lock.json  tsconfig.json .eslintrc.js  ./
RUN npm i

COPY ./src ./src

#EXPOSE 3000
CMD ["sh", "-c", "npm run start:dev"]

#NOTE: 
#this isn't really a dev container because the app source code is 
#copied to the container and there's not much point in watching for code changes