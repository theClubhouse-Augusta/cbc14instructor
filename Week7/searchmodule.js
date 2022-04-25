/* 
Author: Evan Gertis
Date: 04/20
program: node search module
example: node searchModule.js [filename]
*/

var glob = require("glob");

let argument = process.argv[2];
let options  = {};

// glob(argument, options, function(er, files){
//     files.forEach(element => {
//         console.log(element);
//     })
// });

var files = glob.readdirSync(argument, {});

glob.readdir(argument, function(err, files) {
    console.log(files);
  });
  