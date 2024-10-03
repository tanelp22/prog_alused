function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let saabounu=0;
let KoikOunad=20;
rl.question('Mitu pöialpoissi tahab õunu?: ', ounaSoojateArv=>{
    for(let i=0;i<ounaSoojateArv;i++){
        saabounu=randomInteger(1,2)
        KoikOunad-=saabounu
        console.log(saabounu)
    }
    console.log("Lumivalgekesele jäi "+KoikOunad+" õuna.")
    rl.close()
})