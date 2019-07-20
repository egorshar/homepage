#!/bin/sh
npm run build
npm run export
touch out/.nojekyll
cat CNAME > out/CNAME
git subtree push --prefix out origin gh-pages