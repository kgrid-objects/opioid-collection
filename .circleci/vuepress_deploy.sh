#!/usr/bin/env sh

# abort on errors
set -e
git config --global user.email "kgrid-developers@umich.edu"
git config --global user.name "circleci"

# build
cd docs

npm install
npm run docs:build
# copy web docs to github pages dist
mkdir -p .vuepress/dist/.circleci
cp -a ../.circleci/. .vuepress/dist/.circleci/.

# navigate into the build output directory
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://${GITHUB_TOKEN}@github.com/kgrid-objects/opioid-collection.git master:gh-pages
