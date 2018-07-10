#!/usr/bin/env sh

rm -rf dist
mkdir -p dist/shelf
cp -rf 99999-10101 dist/shelf/99999-10101
cp -rf 99999-10102 dist/shelf/99999-10102
cp -rf 99999-10103 dist/shelf/99999-10103
cd dist/shelf
zip -r -X ../99999-10101.zip 99999-10101 -x \"*.DS_Store\"
zip -r -X ../99999-10102.zip 99999-10102 -x \"*.DS_Store\"
zip -r -X ../99999-10103.zip 99999-10103 -x \"*.DS_Store\"
cd ..
zip -r -X opioid-shelf.zip shelf -x \"*.DS_Store\" -x \"*.zip\"

