//b1:tao promise 
//b2 :tao ra executor

// promise co 3 trang thai 
//1 pending :dang cho
//2:fulfilled : thanh cong
//3:rejected : that bai

var promise = new Promise(
    //excutor
    function (resolve , reject) {
        //resolve():giai quyet 
        //reject(): tu choi

        reject();
    }
);

promise 
    .then (function (){
        console.log('1');
    })
    .catch(function (){
        console.log('2');
    })
    .finally(function (){
        console.log('Done !')
    });
