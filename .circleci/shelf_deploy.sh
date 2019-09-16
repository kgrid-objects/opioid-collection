#!/bin/bash

shelfUrl=$1
zipLocation=$2

cd $zipLocation

for zipFile in 99999-*.zip
do
  echo -e "Processing $zipFile"
  fileName=${zipFile%%.*}
  curl -X POST "${shelfUrl}"\
           -H "Content-Type: multipart/form-data" \
           -F "ko=@$zipFile"
done
