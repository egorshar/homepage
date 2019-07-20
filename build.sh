#!/bin/sh
npm run build
npm run export
touch out/.nojekyll
cat CNAME > out/CNAME
git add out
git commit out -m "bump build"
git push origin master
git subtree push --prefix out origin gh-pages