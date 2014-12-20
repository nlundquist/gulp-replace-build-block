var replace = require('gulp-replace');

var reg_build = /<!--\s*build:(\w+)(?:\(([^\)]+)\))?\s*([^\s]+)?\s*(?:(.*))?\s*-->(?:[\s\S]*?)<!--\s*endbuild\s*-->/g;

var buildblock = function() {
    return replace(reg_build, function(matches) {
        var type = matches[1];
        var path = matches[3];

        if (type == 'css') {
            return '<link href="'+path+'" rel="stylesheet" />';
        }
        else if (type == 'js') {
            return '<script src="'+path+'" type="text/javascript"></script>';
        }
        else {
            throw new TypeError('guilp-replace-build-block: Unknown block type: "'+type+'". Only accepts useref blocks with types "js" or "css".')
        }
    })
}

module.exports = buildblock;