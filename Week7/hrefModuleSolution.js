
// node program to demonstrate the 
// url.href API as Setter 
   
//importing the module 'url'
const http = require('url');
   
// creating and initializing myURL
const myURL = new URL('https://example.com:80/foo#ram');
   
// Display href value of myURL before change
console.log("Before Change");
console.log(myURL.href);
   
// assigning serialized URL
// using href
console.log();
myURL.href = 'https://google.com/';
   
// Display href value of myURL after change
console.log("After Change");
console.log(myURL.href);