#! /bin/bash
npm install
npm build
echo enter tag:
read tag
docker build -t rest_api_image:${tag} .
echo your name:
read name
echo "// New comment from ${name}" >> app.js
echo enter new tag:
read newtag
docker build -t rest_api_image:${newtag} .
