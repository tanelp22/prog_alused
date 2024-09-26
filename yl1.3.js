const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage astme alus: `, astmeAlus=>{
    let astendaja =4
    let tulemus=astmeAlus**astendaja
    console.log(tulemus)
    rl.close()
})
