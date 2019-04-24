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
pm2 startOrGracefulReload russj_backup.pm2.config.js


echo $dir #should be app

cd react_frontend

npm install

npm run build





