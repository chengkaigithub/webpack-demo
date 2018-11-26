#!/usr/bin/env bash

git pull
rm -rf node_modules
# npm install
# npm run build
export yarn=/usr/local/yarn/yarn-v1.7.0/bin/yarn
yarn
yarn build
nginx -s reload