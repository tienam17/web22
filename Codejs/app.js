// Sync :Dong bo 
// Async :Bat dong bo 

setTimeout(function(){
    console.log(1);
}, 1000);

console.log(2);

function choigame (){
   console.log('dang choi game\n');
}

function hocBai (callback){
    setTimeout(function(){
        console.log('dang hoc bai\n');
        callback();
    },2000);
}

hocBai(choigame);
// choigame();





