function next(){
    stack.shift()()
}

function f(str, end){

    var browser = run()
        , z = ";console.log('"+ str.split('\n').join("');console.log('")+"');"
    //console.log(z)
    browser.end(z)
    browser.pipe(through(function(chunk){
        process.stdout.write(chunk)
        if ( chunk.indexOf('###') !== -1 ) {
            browser.stop()
            next()
        }
    }))
}

var fs = require('fs')
    , through = require('through')
    , run = require('browser-run')
    , strings = [ '1\n###', '2\n###', '3\n###' ]
    , stack = strings.map(function(str){ return function(){ f(str,next) } })

next()
