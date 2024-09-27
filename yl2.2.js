const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage  Leedu perenimi: `, leeduPerenimi=>{
    if (leeduPerenimi.slice(-1)!="e"){
        console.log("Pole ilmselt leedulanna perekonnanimi")
        rl.close()
    }
    else if(leeduPerenimi.slice(-2)=="ne"){
        console.log("Abielus")
        rl.close()
    }
    else if(leeduPerenimi.slice(-2)=="te"){
        console.log("Vallaline")
        rl.close()
    }
    else{ 
        console.log("Määramata")
        rl.close()
    } 

})
