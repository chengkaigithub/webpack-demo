#!/usr/bin/env bash

rm -rf node_modules
# npm install
# npm run build
yarn
yarn build
nginx -s reload