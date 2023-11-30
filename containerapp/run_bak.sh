#!/bin/bash

# Check if there is a Docker image named "crawler"

if ! sudo docker images | grep -wE 'crawler|crawler_arm64' > /dev/null; then
    echo "Docker repository 'crawler' not found. Building the image..."
    # Build the Docker image with the name 'crawler'
    if uname -m | grep -w 'arm64' > /dev/null; then
      echo "Docker Built arm64."
      imagesName='crawler_arm64:1.0.0'
    else
      echo "Docker Built x86."
      imagesName='crawler:1.0.0'
    fi
    sudo docker build -t artifactory.gz.cvte.cn/dify/$imagesName .
else
    echo "Docker image already built."
fi

# Ensure that init.sh script is executable
sudo chmod +x ./data/init.sh

# Starting docker, mount docker.sock to work with docker-in-docker function, mount data directory for input/output from container
sudo docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -v ./data:/home/data $imagesName bash -c "home/data/init.sh"
