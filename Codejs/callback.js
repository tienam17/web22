// function myFunction (param) {
//    param('112333');
// }

// function myCallback (value){
//     console.log(value);
// }

// myFunction(myCallback);

// //
// function home (a,callback) {
//     console.log (`Bat dau lam bai tap ${a}`);
//     callback();
// }
// home ('Toan' ,function() {
//     console.log('Lam bai tap xong');
// });
[].filter(() => {})

// function home(b, callback) {
//     //1s
//     //console.log(`Bắt đầu làm bài tập ${b}`);

//     //3s
//     //A bat dong bo
//    setTimeout(() => {
//         console.log(`Dang lam bai tap`); 
//     } , 3000);

//     //3s
//    //console.log('Di choi');
// }

// function doHomeWorkDone (){
//     // console.log('Làm bài tập xong');
// }

// const diChoi = () => {
//     console.log('di choi')
// }
// home('Toán', diChoi);


// const dangLamBaiTap = (callback) => {
//     setTimeout(() => {
//         console.log('Dang lam bai tap')
//         callback();
//     }, 3000);
// }
// const diChoi= () => {
//         console.log('Di choi') 
// }
// //ham bat dong bo
// dangLamBaiTap(diChoi)

//diChoi()

//promise


//async await    - ES6


const dangLamBaiTap = async () => {
    await new Promise(resolve => setTimeout(() => {
        console.log('Dang lam bai tap')
        resolve()
    }, 2000));
}

new Promise((resolve, reject)=> {
    
})

Promise.resolve()

Promise.reject()

const diChoi= () => {
        console.log('Di choi') 
}


//binh thuong
const home = () => {
    //ham bat dong bo
    dangLamBaiTap()

   diChoi()
}

//callback



// const home = async () => {
//     //ham bat dong bo
//    await dangLamBaiTap()

//    diChoi()
// }

home()




//Xem lai callback

//on lai cac ham cua chuoi
// - replace
// - split              ---->    xong 

// cac ham ve mang
// - filter
// - Map
// - forEach 
// - some 
// - include  ------>XONG       

//object
// - hasOwnProperty
// - delete         -------> xong 

//ES6


//1. Tim so lon nhat trong mang
/**
 2. Tim 2 so lon nhat trong mang

 3. Tinh tong 2 so lon nhat trong mang

 4. Tim 2 so le lon nhat trong mang

 5. TInh tong 2 so le lon nhat trong mang
 */




//  HTML CSS