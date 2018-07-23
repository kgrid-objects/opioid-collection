#!/usr/bin/env sh

rm -rf dist
mkdir -p dist

cp -rf 99999-10101 dist/99999-10101
cp -rf 99999-10102 dist/99999-10102
cp -rf 99999-10103 dist/99999-10103

cd dist
zip -r -X opioid-all.zip * -x \"*.DS_Store\"

