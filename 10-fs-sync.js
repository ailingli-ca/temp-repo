//directly use {method}
const {readFileSync, writeFileSync}  = require('fs');

//not fs.readFileSync
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// space, break in file will also influence result file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});
//{flag: 'a'} is option, it will append to current file, default is overriding. 


//Synchoronus doing one by one, could take longer time, might make application down 