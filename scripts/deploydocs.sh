#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m "Deployment to GitHub Pages"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/kgrid-demos/cpic-kit.git master:gh-pages
