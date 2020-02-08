FROM node:13

WORKDIR /app

RUN npm install discord.js

# Bundle app source
COPY app .

EXPOSE 8080
CMD ["node", "FilebotSupportBot.js" ]
