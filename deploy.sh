#!/bin/bash

yarn build
git add .
git commit -am "update dist"
git push origin dev

cp -R build dist_temp
git checkout master
git pull origin master
shopt -s extglob
rm -rf !(node_modules|.gitignore|.git|dist_temp|.|..)
cp -R dist_temp/* .
rm -rf dist_temp
git add .
git commit -am "update master"
git push origin master
git checkout dev
