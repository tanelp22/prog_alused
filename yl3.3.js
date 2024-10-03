function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let porgandid=0;
rl.question('Sisestage täringute arv: ', taringuteArv=>{
    for(let i=0;i<taringuteArv;i++){
        console.log(randomInteger(1,6))
    }
    rl.close()
})