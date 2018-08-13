#!/usr/bin/env sh

rm -rf dist
mkdir -p dist
cp -rf knowledge_objects/99999-10101 dist/99999-10101
cp -rf knowledge_objects/99999-10102 dist/99999-10102
cp -rf knowledge_objects/99999-10103 dist/99999-10103
cd dist
zip -r -X 99999-10101.zip 99999-10101 -x \"*.DS_Store\"
zip -r -X 99999-10102.zip 99999-10102 -x \"*.DS_Store\"
zip -r -X 99999-10103.zip 99999-10103 -x \"*.DS_Store\"