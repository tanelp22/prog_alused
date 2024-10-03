const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let porgandid=0;
rl.question('Sisestage ringide arv: ', ringideArv=>{
    if(ringideArv<=1){
        porgandid=0;
    }
    else{for(let i=0;i<ringideArv;i++){
            if((i+1)%2==0){
                porgandid+=i+1
            }
        }
    }
    console.log("Porgandite koguarv on "+porgandid+".")
    rl.close()
})