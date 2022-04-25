var readline = require('readline');
  
var rl = readline.createInterface(
        process.stdin, process.stdout);
  
rl.setPrompt(`What is your height? `);
rl.prompt();
rl.on('line', (age) => {
    console.log(`height received by the user: ${age}`);
    rl.close();
});