#!/usr/bin/env sh

# Setup
rm -rf dist
mkdir -p dist
cp -r collection/* dist

# create zip for each ko
cd dist
for d in * ; do
    echo "$d.zip"
    zip -r -X "$d.zip" $d -x \"*.DS_Store\"
done

# create one big zip of all kos
zip -r -X ipp-all.zip * -x \"*.DS_Store\" "*.zip*"

# clean up only leaving zip files
rm -r */

# zip up vue app dist
cd ../web/dist
zip -r -X ../../dist/ipp-web.zip *