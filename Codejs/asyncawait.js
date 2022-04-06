// function hello () {
//     return new Promise (resolve=>{
//         resolve('Hello');
//     })
// }

async function hello(){
    return "Hello"
}

hello().then(function(value){
    console.log(value);
})

console.log(hello())

//goi ham async tra ve promise

