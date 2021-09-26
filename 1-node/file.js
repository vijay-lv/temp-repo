const {readFileSync , writeFileSync} = require('fs');

const first=readFileSync('./content/sub/first.txt','utf8');

const second=readFileSync('./content/sub/second.txt','utf8');

writeFileSync('./content/sub/new.txt',`Here is the result of new text file : ${first},${second}`,{flag:'a'})

console.log(first,second)