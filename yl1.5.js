const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage ainepunkide arv: `, ainepunktid=>{
    rl.question("Sisesatage nädalate arv: ",  nädalad=>{
		vastus=Math.round((ainepunktid*26)/nädalad)
        console.log(vastus)
        rl.close()
    })
})
