const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Sisestage mitu korda äratada: ', aratuseKordadeArv=>{
    for(let i=0;i<aratuseKordadeArv;i++){
        console.log("Tõuse ja sära!")
    }
    rl.close()
})