#!/usr/bin/env sh

rm -rf dist
mkdir -p dist
cp -rf 99999-10101 dist/99999-10101
cp -rf 99999-10102 dist/99999-10102
cp -rf 99999-10109 dist/99999-10109
cd dist
zip -r -X 99999-10101.zip 99999-10101 -x \"*.DS_Store\"
zip -r -X 99999-10102.zip 99999-10102 -x \"*.DS_Store\"
zip -r -X 99999-10109.zip 99999-10109 -x \"*.DS_Store\"