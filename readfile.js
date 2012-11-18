//readfile.js

var demo = require('fs')
demo.readFile('fsdemo.txt', 'utf-8', function (err,data) {
    console.log(data)
})

