function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Sisestage kirja suurus megabaitides: ', kirjaSuurus=>{
    rl.question("Sisesatage kirja Teema peakiri: ",  teemaPealkiri=>{
        rl.question('Kas kirjaga on kaasas Fail ("jah")/("ei"): ',  Fail=>{
            if(teemaPealkiri.length ==0 || (Fail =="jah" && kirjaSuurus>1.0)){
                console.log("Kiri on spamm.")
                rl.close()
            } 
            else{
                console.log("Kiri ei ole spamm.")
                rl.close()
            
            }
        })
    })
})