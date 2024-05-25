FROM node:18-alpine

WORKDIR /fitness-gpt-react/

COPY public/ /fitness-gpt-react/public
COPY src/ /fitness-gpt-react/src
COPY package.json /fitness-gpt-react/

RUN npm install

CMD ["npm", "start"]