#!/usr/bin/env bash

git pull
rm -rf node_modules
# npm install
# npm run build
/usr/local/yarn/yarn-v1.7.0/bin/yarn
/usr/local/yarn/yarn-v1.7.0/bin/yarn build
nginx -s reload