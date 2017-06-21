FROM redacademy/nodebase

COPY bundle /home/meteor/bundle

WORKDIR /home/meteor/bundle/programs/server
RUN npm install

WORKDIR /home/meteor/bundle
ENTRYPOINT ["pm2-docker", "main.js"]
