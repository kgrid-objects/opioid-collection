#!/usr/bin/env sh

rm -rf dist
mkdir -p dist/shelf
cp -rf 99999-10101 dist/shelf/99999-10101
cp -rf 99999-10102 dist/shelf/99999-10102
cp -rf 99999-10103 dist/shelf/99999-10103
cd dist
zip -r -X opioid-shelf.zip shelf -x \"*.DS_Store\"

