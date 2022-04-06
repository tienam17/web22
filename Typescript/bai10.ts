var getBonus=function(value = 10,tax = value + 0.1,salary=10){
    console.log(value + tax);
    console.log(arguments.length);
    
}
getBonus();
getBonus(20,40);
getBonus(20,40,10);