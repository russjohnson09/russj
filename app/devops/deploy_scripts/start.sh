#!/bin/bash
cd "$(dirname "$0")"
git pull
dir="$(pwd)"
cd $dir
cd ..
cd ..
dir="$(pwd)"
echo $dir #should be app

cd node_app


npm install
tsc
pm2 startOrGracefulReload russj.pm2.config.js
pm2 startOrGracefulReload russj_balanced.pm2.config.js

#TODO manage these in a more uniformed manner?
#start microservices
#echo "start microservices"
#pm2 startOrGracefulReload microservices.pm2.config.js
#pm2 startOrGracefulReload microservices_balanced.pm2.config.js

cd /home/ubuntu/node_monolith/node_app2/react

npm install

npm run build





