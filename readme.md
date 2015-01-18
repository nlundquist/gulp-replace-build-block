# gulp-replace-build-block [![Build Status](https://travis-ci.org/nlundquist/gulp-replace-build-block.svg?branch=master)](https://travis-ci.org/nlundquist/gulp-replace-build-block)

> Parse build blocks in HTML and replace blocks with tag linking the block output file. Intended for use in combination with [html-build-blocks](https://github.com/nlundquist/html-build-blocks), [gulp-filter](https://github.com/sindresorhus/gulp-filter) and [gulp-concat](https://github.com/wearefractal/gulp-concat) to provide [useref](https://github.com/digisfera/useref) like behaviour in gulp.

Inspired by the [gulp-useref](https://github.com/jonkemp/gulp-useref) plugin,  but with a signifigantly different design to provide greater modularity and streaming support.


## Install
```
npm install --save-dev gulp-replace-build-block
```


## Usage

The following example will parse HTML and replace build blocks with a link/script to the destination path.

```js
var gulp = require('gulp'),
    replaceblocks = require('gulp-replace-build-block');

gulp.task('default', function() {
    return gulp.src('/html/**/*.html').pipe(replaceblocks())
});
```

Blocks are expressed as:
```html
<!-- build:<type> <path> -->
~ script tags or link tags ~
<!-- endbuild -->
```

- **type**: either `js` or `css`
- **path**: the file path of the optimized file, the target output

Blocks are rendered as:
```html
<!-- css blocks -->
<link href="<path>" rel="stylesheet" />
<!-- js blocks -->
<script src="<path>" type="text/javascript"></script>
```

## API

### replaceblocks()

Takes no arguments.

## License

MIT © Nils Lundquist