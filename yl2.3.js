const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage enda vanus: `, vanus=>{
    rl.question("Sisesatage enda sugu (M, m, N, n))",  sugu=>{
		rl.question("Sisesatage treeningu tüüp (1, 2, 3)", treeninguTüüp=>{
            if (sugu=="M" || sugu =="m"){
                maxPulss=220-vanus
                if (treeninguTüüp==1){
                    optMin=Math.round(0.5*maxPulss)
                    optMax=Math.round(0.7*maxPulss)
                } 
                else if(treeninguTüüp==2){
                    optMin=Math.round(0.7*maxPulss)
                    optMax=Math.round(0.8*maxPulss)
                }
                else if(treeninguTüüp==3){
                    optMin=Math.round(0.8*maxPulss)
                    optMax=Math.round(0.87*maxPulss)
                }
			    console.log("Pulsisagedus peaks olema vahemikus "+optMin+" kuni "+optMax+".")
                rl.close()
            }
            else if(sugu=="N" || sugu =="n"){
                maxPulss=206-(vanus*0.88)
			    if (treeninguTüüp==1){
                    optMin=Math.round(0.5*maxPulss)
                    optMax=Math.round(0.7*maxPulss)
                } 
                else if(treeninguTüüp==2){
                    optMin=Math.round(0.7*maxPulss)
                    optMax=Math.round(0.8*maxPulss)
                }
                else if(treeninguTüüp==3){
                    optMin=Math.round(0.8*maxPulss)
                    optMax=Math.round(0.87*maxPulss)
                }  
			    console.log("Pulsisagedus peaks olema vahemikus "+optMin+" kuni "+optMax+".")
                rl.close()
            } 
            else {
                console.log("Vale sisend. (Õige M/m/N/n)")
                rl.close()
            }
        })
    })
})
