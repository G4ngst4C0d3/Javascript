setTimeout(function(){
    console.log("After five seconds.")
}, 5000)

let counter = 1
const intervaId =  setInterval( function(){
    console.log("execute after four seconds.")
    counter ++
    if(counter >= 5){
        clearInterval(intervaId)
    }

}, 4000)

function somaAsync(a , b){
    const numA =  parseFloat(a) 
    const numB =  parseFloat(b)
    
    return numA + numB
}

const result = somaAsync(3,7)
console.log(result)

async function execute(){
   const result2 = await somaAsync(3,4)
   console.log(result2)
}

execute()