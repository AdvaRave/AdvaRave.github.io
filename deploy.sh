#!/bin/bash

npm run build
git add .
git commit -am "update dist"
git push origin dev

cp -R dist dist_temp
git checkout master
rm -rf dist
mv dist_temp dist
git add .
git commit -am "update master"
git push origin master
