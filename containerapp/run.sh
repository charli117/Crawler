#!/bin/bash

# Ensure that init.sh script is executable
sudo chmod +x ./data/init.sh

if uname -m | grep -w 'arm64' > /dev/null; then
  echo "Docker Run arm64."
  imagesName='crawler_arm64:1.0.0'
else
  echo "Docker Run x86."
  imagesName='crawler:1.0.0'
fi

# Starting docker, mount docker.sock to work with docker-in-docker function, mount data directory for input/output from container
#sudo docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -v ./data:/home/node artifactory.gz.cvte.cn/dify/$imagesName bash -c "/home/node/init.sh"
sudo docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -v ./data:/home/data crawler_arm64:1.0.0 bash -c "/home/data/init.sh"