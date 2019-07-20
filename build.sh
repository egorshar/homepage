#!/bin/sh
rm -rf out

npm run build
npm run export
touch out/.nojekyll
cat CNAME > out/CNAME

git add out
git commit out -m "bump build"
git push origin master
git push origin `git subtree split --prefix out master`:gh-pages --force