/**
 * Created by Nils on 14-12-17.
 */
/* global describe, it */
'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var es = require('event-stream');
var File = require('vinyl');
var replaceblocks = require('../index');

function fread(f) {
    return fs.readFileSync(f, {encoding: 'utf-8'});
}

describe('gulp-replace-build-block', function() {
    it('should return files', function(done) {
        var pipe = replaceblocks();
        var file = new File({
            contents: fs.createReadStream('test/html/test.html')
        });

        pipe.once('data', function(file) {
            // make sure it came out the same way it went in
            expect(file.isStream());

            // buffer the contents to make sure it got prepended to
            file.contents.pipe(es.wait(function(err, data) {
                // check the contents
                expect(data).to.equal(fread('test/html/test_replaced.html'));
                done();
            }));
        });

        pipe.write(file);
    });
});