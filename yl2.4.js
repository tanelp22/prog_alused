function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Kas soovite istekoha ise valida ("ise") või loosida ("loos")?', valik=>{
    if (valik=="ise"){
        rl.question('Kas soovite istuda akna ääres ("aken") või mitte ("muu")?', valikB=>{
            if (valikB=="aken"){
                vastus="Valisite ise. Aknakoht"
            } 
            else if (valikB=="muu"){
                vastus="Valisite ise. Vahekäigukoht"
            } 
            else {
                console.log('Vale sisend. Õige "aken" ; "muu"')
            } 
            console.log(vastus)
            rl.close()
            
        })
           
    }
    else if (valik=="loos"){
        loos=randomInteger(1,3)
        if (loos==3){
            vastus="Istekoht loositi. Aknakoht"
        }
        else{vastus="Istekoht loositi. Vahekäigukoht"}
        console.log(vastus)
        rl.close()
    } 
    else {
        console.log('Vale sisend. Õige "ise" ; "loos"')
        rl.close()
    } 
    
    
})