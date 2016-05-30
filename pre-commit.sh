#!/bin/sh
sed -i '' 's/# UPDATED.*/# UPDATED '$(date +%s)'/' manifest.appcache
git add manifest.appcache
