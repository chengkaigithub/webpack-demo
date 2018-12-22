#!/usr/bin/env bash

git pull
rm -rf node_modules
# npm install
# npm run build
/usr/local/yarn/yarn-v1.7.0/bin/yarn
/usr/local/yarn/yarn-v1.7.0/bin/yarn build

cd /usr/chengkai/test-project/webpack-demo/build
rm -rf *
mv -f /usr/chengkai/test-project/webpack-demo/build/* /usr/chengkai/test-project/webpack-demo/product/

nginx -s reload