#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd web/.vuepress/dist

git init
git add -A
git commit -m "Deployment to GitHub Pages"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/kgrid-objects/opioid-collection.git master:gh-pages
