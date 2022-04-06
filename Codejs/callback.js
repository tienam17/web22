// function myFunction (param) {
//    param('112333');
// }

// function myCallback (value){
//     console.log(value);
// }

// myFunction(myCallback);

//
function home (a,callback) {
    console.log (`Bat dau lam bai tap ${a}`);
    callback();
}
home ('Toan' ,function() {
    console.log('Lam bai tap xong');
});

//
// function home(b, callback) {
//     setTimeout( function(){
//         console.log(`Bắt đầu làm bài tập ${b}`);
//         callback();
//     }, 100);
    
// }
// function doHome (){
//     console.log('Làm bài tập xong');
// }
// home('Toán', doHome);





