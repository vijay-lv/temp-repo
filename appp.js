const {writeFileSync}=require('fs')

for(let i=0;i<1000;i++){

    writeFileSync('./content/sub/big.txt',`hi there ${i}\n`,{flag:'a'})

}