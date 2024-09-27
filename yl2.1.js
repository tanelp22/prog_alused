const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisesta õhutemperatuur: `, temperatuur=>{
    //if (temperatuur<4.0){
    //    console.log("On jäätumise oht.")
    //}
    //else{console.log("Ei ole jäätumise ohtu.")} 
    
    //vastus=(temperatuur<4.0) ? "On jäätumise oht." : "Ei ole jäätumise ohtu." ;
    //console.log(vastus)
    
    console.log((temperatuur<4.0) ? "On jäätumise oht." : "Ei ole jäätumise ohtu." )
    rl.close()
})
