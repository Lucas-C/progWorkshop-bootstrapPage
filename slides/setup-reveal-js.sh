#!/bin/bash

# USAGE: ./setup-reveal-js.sh title="..." author=$USER

set -o pipefail -o errexit -o nounset -o xtrace

reveal_md2js () {
    local mdBasename="${1%.md}"
    cat <<EOF >$mdBasename.js
(function () {
'strict'
var markdownContent = ''
EOF
    sed -e 's/\\/\\\\/g' -e 's/"/\\"/g' -e 's/^/+ "/' -e 's/$/\\n"/' <$mdBasename.md >>$mdBasename.js
    cat <<EOF >>$mdBasename.js
;
var script = document.querySelector('script[src="index.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
EOF
    echo $mdBasename.js has been successfully generated
}

cd $(dirname ${BASH_SOURCE})

srcFilename=index
convertMdToJs=true
mousecontrol=true
mathjax=true
theme=moon
version=3.3.0

transition=none
progress=true
slideNumber=false
controls=true
history=true
center=true

eval "$@"

wget https://github.com/hakimel/reveal.js/archive/$version.zip
unzip $version.zip
rm -rf css/ js/ lib/ plugin/
mv reveal.js-$version/* .
rm -rf CONTRIBUTING.md  demo.html test/ reveal.js-$version/ $version.zip

sed -i \
    -e "s~<title>[^<]*</title>~<title>$title</title>~" \
    -e "s~href=\"css/theme/black.css\"~href=\"css/theme/$theme.css\"~" \
    -e "/<section>Slide 2<\/section>/d" \
    -e "s~history:[^,]*,~history: $history,~" \
    -e "/Reveal.initialize({/atransition: '$transition'," \
    -e "/Reveal.initialize({/aprogress: '$progress'," \
    -e "/Reveal.initialize({/aslideNumber: '$slideNumber'," \
    -e "/Reveal.initialize({/acontrols: '$controls'," \
    -e "/Reveal.initialize({/acenter: '$center'," \
    index.html

if $convertMdToJs; then
    reveal_md2js $srcFilename.md
    sed -i "s~<section>Slide 1</section>~<script            src=\"$srcFilename.js\" data-separator=\"^\\n\\n\\n\" data-separator-vertical=\"^\\n\\n\" data-notes=\"^Note:\" data-charset=\"utf-8\"></script>~" index.html
else
    sed -i "s~<section>Slide 1</section>~<section data-markdown=\"$srcFilename.md\" data-separator=\"^\\n\\n\\n\" data-separator-vertical=\"^\\n\\n\" data-notes=\"^Note:\" data-charset=\"utf-8\"></section>~" index.html
fi

if [ -n "${author:-}" ]; then
    sed -i \
        -e "/<title>/a<meta name=\"author\" content=\"$author\">" \
        -e "/href=\"css\/reveal.css\"/a<style>.reveal:before {content: '$author'; font-size: x-large; position: fixed; top: 5%; right: 5%;}</style>" \
        index.html
fi

if $mathjax; then
    sed -i "/dependencies: \[/a{ src: 'plugin/math/math.js', async: true }," index.html
fi

if $mousecontrol; then
    sed -i '/});/aif (/mousecontrol/.test(location.search)) { document.onclick = function (event) { if (event.which == 2) { Reveal.prev(); } else { Reveal.next(); } }; }' index.html
fi
