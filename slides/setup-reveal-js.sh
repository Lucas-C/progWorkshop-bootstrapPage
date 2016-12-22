#!/bin/bash

set -o pipefail -o errexit -o nounset -o xtrace

cd $(dirname ${BASH_SOURCE})

version=3.3.0

wget https://github.com/hakimel/reveal.js/archive/$version.zip
unzip $version.zip
rm -rf css/ js/ lib/ plugin/
rm reveal.js-$version/index.html
mv reveal.js-$version/* .
rm -rf CONTRIBUTING.md  demo.html test/ reveal.js-$version/ $version.zip
