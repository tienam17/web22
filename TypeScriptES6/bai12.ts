let displayColorsSperead=function(message,...colors:string[]){
    for(let i in colors){
        console.log(colors[i]);
    }
}

let messageSpread="Hellow";
let colors =['red','blue','black']
displayColorsSperead(messageSpread,...colors);
