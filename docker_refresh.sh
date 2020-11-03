#!/bin/sh
git pull
docker build . -t nginx
docker container stop nginx
docker container rm nginx
docker run -d --restart unless-stopped --name nginx -p 8081:80 nginx
