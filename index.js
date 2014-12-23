var replace = require('gulp-replace');

var reg_build = /<!--\s*build:(\w+)(?:\(([^\)]+)\))?\s*([^\s]+)?\s*(?:(.*))?\s*-->(?:[\s\S]*?)<!--\s*endbuild\s*-->/g;

var buildblock = function() {
    var rewrite = function(matches, type, search, path, options) {
        if (Array.isArray(matches))
            return rewrite.apply(this, matches);

        if (type == 'css') {
            return '<link href="'+path+'" rel="stylesheet" />';
        }
        else if (type == 'js') {
            return '<script src="'+path+'" type="text/javascript"></script>';
        }
        else {
            throw new TypeError('guilp-replace-build-block: Unknown block type: "'+type+'" in block "'+path+'". Only accepts useref blocks with types "js" or "css".')
        }
    };
    return replace(reg_build, rewrite)
};

module.exports = buildblock;