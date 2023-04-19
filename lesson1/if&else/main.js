// câu lệnh rẽ nhánh 

let date =6;

if(date===2) {
    console.log('Hôm nay là thứ 2');
} else if(date===3){
    console.log('Hôm nay là thứ 3');
} else if(date===4){
    console.log('Hôm nay là thứ 4');
}else{
    console.log('không biết ');
}

//luôn luôn vào một nhánh 
// Khi a chia hết cho 3 thì return về 1
// Khi a chia hết cho 5 thì return về 2
// Khi a chia hết cho 15 thì return về 3
function run(a) {
    if (a %3 == 0){
        if (a %5 == 0){
            return 3
        }
         else {return 1 }  
    }else {
        return 2
    }    // 
}
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

// Câu lệnh sẽ nhánh Switch
let dates =5;
switch(dates){
    case 2:
        console.log('Hôm nay là thứ 2 ');
        // break; // thoát câu lệnh
    case 3:
        console.log('Hôm nay là thứ 3 ');
        // break; // thoát 
    case 4:
        console.log('Hôm nay là thứ 4 ');
        // break; // thoát
    case 5:
        console.log('Hôm nay là thứ 5 ');
        // break; // thoát
    default :
    console.log('Không biết ') ;
};

function run(fruits) {
    var result;

switch(fruits) {
    case "Banana":
            result = "This is a Banana";
            break;
    case  "Apple":
            result = "This is an Apple";
            break;
         default:   
            result = "No fruits";
    }

    return result;
}
// toán tử 3 ngôi 
let khoaHoc ={
    name :'JS',
    coin:0
}
// if(khoaHoc.coin>0){
//     console.log(`${khoaHoc.coin} coins`);
// }else{
//     console.log('Miễn phí ')
// }

let result = khoaHoc.coin>0 ?`${khoaHoc.coin} coins`:'Miễn phí';
console.log(result);