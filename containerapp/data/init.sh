#!/bin/bash

# copy the config when starting the container
cp /home/data/config.ts /home/myuser/

# start the crawler
cd /home/myuser && npm install && npm start

# Print message after crawling and exit
echo "Crawling complete.."
exit