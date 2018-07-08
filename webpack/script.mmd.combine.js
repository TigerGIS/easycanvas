'use strict';

const target = './build/plugin.webgl.mmd.standalone.prod.js';

var fs = require('fs');
var glob = require('glob');

var getLastFilenameCharcode = function (a) {
    return a.substr(a.lastIndexOf('/') + 1).charCodeAt(0);
};

var js = glob.sync('./build/mmd/*.js').sort((a, b) => {
    return getLastFilenameCharcode(a) < getLastFilenameCharcode(b);
});
js.unshift('./src/lib/_glMatrix-0.9.5.min.js');
js.unshift('./src/lib/_ammo.js');

console.log(js);

fs.existsSync(target) && fs.unlinkSync(target);
// console.log(js)
for (var i = 0; i < js.length; i++) {
    var fileContent = '/* ' + js[i].substr(js[i].lastIndexOf('/') + 1) + ' */' + fs.readFileSync(js[i], 'utf8') + '\n';
    fs.writeFileSync('./build/plugin.webgl.mmd.standalone.prod.js', fileContent, {
        flag: 'a',
    });
}
