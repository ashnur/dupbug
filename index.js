var fs = require('fs')
    , through = require('through')
    , async = require('async')
    , run = require('browser-run')
    , strings = [ '1\n###', '2\n###', '3\n###' ]


function f(str, end){

    var browser = run()
        , z = ";console.log('"+ str.split('\n').join("');console.log('")+"');"
    //console.log(z)
    browser.end(z)
    browser.pipe(through(function(chunk){
        process.stdout.write(chunk)
        if ( chunk.indexOf('###') !== -1 ) {
            browser.stop()
            end()
        }
    }))
}

async.eachSeries(strings, f)
