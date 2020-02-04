FROM node:13

RUN npm install discord.js

# Bundle app source
COPY FilebotSupportBot.js .

EXPOSE 8080
CMD ["node", "FilebotSupportBot.js" ]
