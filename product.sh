#!/usr/bin/env bash

rm -rf node_modules
npm install
npm run build
nginx -s reload