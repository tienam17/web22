let khoaHoc=[
    {
        id:1,
        name :'js',
        coin:250
    },
    {
        id:2,
        name :'php',
        coin:0
    },
    {
        id:3,
        name :'ruby',
        coin:0
    },
    {
        id:4,
        name:'java',
        coin:400
    },
    {
        id:5,
        name :'golang',
        coin:500
    },
    {
        id:6,
        name:'java',
        coin:100
    },
]

// khoaHoc.forEach(function(course, index){
//     console.log(index,course);
// });  // duyệt qua phần tử của mảng và k trả về gì cả

// let isFre=khoaHoc.every(function(course,index){
//     return course.coin===0;
// });
// console.log(isFre);
 // lặp qua phần tử của mảng và k trả về kiểu dúng hoặc sai 

//  let isFre=khoaHoc.some(function(course,index){
//     return course.coin===0;
// });
// console.log(isFre);

// let isFre=khoaHoc.filter(function(course,index){
//     return course.coin==='java';
// });
// console.log(isFre);

// let newCourses=khoaHoc.map(function(course,index){
//    return {
//     id:khoaHoc.id,
//     name : `hoc: ${khoaHoc.name}`,
//     coin:khoaHoc.coin,
//     coinText:`Gia:${khoaHoc.coin}`,
//     index:index
//    };
    // return khoaHoc.name;
// } );
//  console.log(newCourses);
// lặp qua từng phần tử , return cái gì sẽ nhận lại cái đó 

// let i=0;
// function coinHandler(accumulator,value, index, array){
//     i++;
//     let total = accumulator+value.coin;

//     console.table({
//         'Lượt chạy:':1,
//         'Biến tích chữ :':accumulator,
//         'Gía khóa học :':value.coin,
//         'Tích chữ đươc:':total
//     });
//     return total;
// }

// let tatoCoin = khoaHoc.reduce(coinHandler,0);

// console.log(tatoCoin);

// let tatoCoin =khoaHoc.reduce(function(total,course){
//     return total + course.coin;
// },0);
// console.log(tatoCoin);


// let tatoCoin=khoaHoc.reduce((a,b)=>
//     a+b.coin , 0
// )

// console.log(tatoCoin);

// BÀI TẬP : làm phẳng mảng 
// let depthArray =[1,2,[3,4],5,6,[7,8,9]];

// let flatArray = depthArray.reduce(function(flatOutput,depItem){
//     return flatOutput.concat(depItem);
// },[]);

// console.log(flatArray);

// Lấy ra khóa khóa  học đưa vào mảng mới 
let  topics =[
    {
        topics:"Font-End",
        couress:[
            {
                id:1,
                title :"HTML,CSS",
            },
            {
                id:2,
                title:"JS"
            }
        ]
    },
    {
        topics:"Bach-End",
        couress:[
            {
                id:1,
                title :"PHP"
            },
            {
                id:2,
                title :"Node JS",
            }
        ]
    },

];

// let newCourses =topics.reduce(function(couress,topic){
//     return couress.concat(topic.couress);
// },[]);
// console.log(newCourses);

// let htmls =newCourses.map(function(coures){
//     return `
//         <div>
//             <h2>${coures.title }</h2>
//             <p>ID:${coures.id}
//         </div>
//     `;
// });
// console.log(htmls.join(''));

// ĩclude 

let title ='Nguyen Tien Nam ';
console.log(title.includes('đen'));

let coures=['Js','php','ruby'];

console.log(coures.includes('Js'));