//tính tổng của mảng 

// let tong = 0;
// let tongMang = (value, index) => {
    
//   tong = tong + value;
//   console.log(tong);
// };

// [1, 2, 7,8,9].forEach(tongMang);

// let tongCuaMang=(mang)=>{
//     let sum =0;
//     mang.forEach((value, index)=>{
//         sum =sum +value ;
//         console.log(sum);
//     })
// }
// tongCuaMang([1,2,3,4,5]);

// let array =[1,2,3,4,5];
// let array2 =[6,7,8,9]
// console.log(array.length) 
// console.log(array.push(9))
// console.log(array);
// console.log(array.concat(array2));

// let  numbers = [5, 10, 20, 22, 60];
// let  new_number = numbers.map((value) =>{
//     return value * 2;  
// });
// console.log(new_number);
 
//mảng nhân hai 
// let nhanHai =(mang)=>{
//     // arrow function
//     let nhanDoi = (so)=>{
//         return so *2
//     }

//     //ham an danh cua arrow function
//     (so)=>{
//         return so *2
//     }

//     function nhanDoi(so){
//         return so *2
//     }
//     // ham an danh
//     function(so){
//         return so *2
//     }
//     //let kQ=mang.map(nhanDoi);
//     let kQ = mang.map()

//     // let kQ=mang.map(
        
//     //(so)=>{
//     //     return so *2
//     // }

//     //);

//     return kQ;
//     // let b=nhanDoi(17);
//     // console.log(b);
    
// }
// [5,10,15,20]
// let a=nhanHai();
// console.log(a);

// let nhanDoi =(mang)=>{
//     let ketQua;
//     ketQua=mang.map((value, index, Array)=>{
//         return value*5;
//     });
//     console.log(ketQua);
// }
// nhanDoi([5,10,15,20]);

// var array = [1, 4, 9, 16];
// var map = array.map(function(item) {
//   return item * item;
// });
// console.log(map);   // > Array [1, 16, 81, 256]
// console.log(array); // > Array [1, 4, 9, 16]


// const numbers = [1,2,3,4,5,6,7,8];
// let soLe = numbers.filter(num => num % 2);
// console.log(soLe);//[1,3,5,7]

// // sô lẻ trong mảng 
// let soLe =(mang)=>{
//     const checkSoLe = (phanTu, index)=>{
//         return phanTu%2 !== 0;
//         //return true;
//     }
//    const kq = mang.filter(checkSoLe)
// //    console.log(kq)
//     return kq;
// }
// let a=soLe([1,2,3,4,5,6,7])
// console.log(a);

// tìm sô chẵn trong mảng 
// let soChan = (mang) => {
//     let ketQua = mang.filter((value, index) => {
//       return value % 2 === 0;
//     });
//     console.log(ketQua);
//   };
//   soChan([1, 2, 3, 4]);

//viêt hàm truyền vào mảng số chả về sô lớn nhât trong mảng

// let soLonNhat =(mang) =>{
//     let max= mang[0];
//    mang.forEach((value,  index) => {
//     if(max <value){
//         max=value ;
//     }
//     console.log(max);
//    });

// }

// soLonNhat([1,2,3,4,8]);
let tongMangChan =(mang)=>{
    let mangChan=mang.filter((value, index)=>{
        return value %2!==0;
    });
    console.log(mangChan);
    let ketQua=0;
    mangChan.forEach((value, index)=>{
        ketQua=value+ketQua;
    });
    console.log(ketQua);     
};
tongMangChan([1,2,5,6,8,9]);

// /tinh tong so nho hown 10 trong mang 

let tongMang =(mang)=>{
    let soNhoHon= mang.filter((value, index)=>{
        return value<10;
    });
    console.log(soNhoHon);
    let kQ=0;
    soNhoHon.forEach((value, index)=>{
        kQ=value+kQ
    });
    console.log(kQ);
    
};
tongMang([1,3,5,6,9,10,15,17,20]);

//
 









