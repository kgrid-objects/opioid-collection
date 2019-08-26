#!/usr/bin/env sh

npm run build

REM navigate into the build output directory
cd web/.vuepress/dist

git init
git add -A
git commit -m "Deployment to GitHub Pages"


git push -f https://github.com/kgrid-objects/opioid-collection.git master:gh-pages
