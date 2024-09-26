const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage oma nimi: `, nimi=>{
    rl.question("Sisesatage lubatud kiirus (km/h)",  lubatudKiirus=>{
		rl.question("Sisesatage tegelik kiirus (km/h)", tegelikKiirus=>{
            let trahv=Math.max(Math.min((tegelikKiirus-lubatudKiirus)*3,190),0)
            //let tulemus=nimi+", kiiruse ületamise eest on teie trahv "+trahv+" eurot."
            let tulemus=`${nimi}, kiiruse ületamise eest on teie trahv ${trahv} eurot."`
			console.log(tulemus)
            rl.close()
        })
    })
})
