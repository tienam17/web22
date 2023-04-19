
// for(let i=1;i<=1000;i++){
//     console.log(i);
// }

let mang =[
    'js',
    'java',
    'php',
    'golang'
];
let mangLength=mang.length;

for(let i=0; i<mangLength;i++){
    console.log(mang[1]);
}
//For / in loop

// let myInfo={
//     namr:'Tien Nam',
//     age :20,
//     address:'TH,VN'
// };
// for(let key in myInfo){
//     console.log(myInfo[key]);
// };

// let languages ='Javascript';
// for(let key in languages){
//     console.log(languages[key]);
// };

//for /of loop
// let myInfo={
//     name :'Tien Nam',
//     age :20
// };

// for(let value of Object.values(myInfo)){
//     console.log(value);
// } // lấy ra các value 

//do /while 
let i=0;
let isSuccess=false;

do{
    i++;
    console.log('Nạp thẻ lần '+i);
    //Thành công
    if(true){
        isSuccess=true;

    }
}while(!isSuccess && i<=3);

// vòng lặp lông nhau 
let mang2 =[
    [1,2],
    [3,4],
    [5,5]
];

for(let i=0; i<mang2.length;i++){
    for(let j=0; j<mang2[i].length;j++){
    console.log(mang2[i][j]);
    }
}
   
