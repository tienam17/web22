                    
// khác nhau giữa var / let , const
// Scope ; phạm vi truy cập
//const / var, let : gán lại giá trị cho biến 
//Code block

// {
//     const  course ='J S' ;

//     {
//         console.log(course);
//     }
    
// }

// // // Hosting : duea len tren
// a=1;
// var a ;
// console.log(a);

// // // gan lai gia tri cho bien 
// const b=1;
// b=10 ;
// console.log(b);


// template litelars
// const courseName ='JS';
// const courseName2 = 'java'
// const description =`Course name :${courseName} ${courseName2}`;
// console.log(description);

// //multi-line string / vieet nhieu dong



// // Arrow function  / Là hàm mũi tên 
// const sum =(a,b)=>a+b
// let i= sum (2,2);
// console.log(i);

// //Class 

// function Course (name, price){
//     this.name=name;
//     this.price =price;
// };

// class Course {
//     constructor(name,price){
//         this.name=name;
//         this.price =price;
//     }
//     getName(){
//         return this.name;
//     }
//     getPrice (){
//         return this.price;
//     }
// }

// const phpCourse= new Course('php',1000);
// const jspCourse= new Course('js',2000);

// console.log(phpCourse);
// console.log(jspCourse);

//Default parameter values / Định nghĩa giá trị mặc định cho tham số 
// function logger (log,type='log'){

//     console.log (log);
//     console.log (type);
// }
  
// logger('facebook',);

//Enhanced object literals/ Định nghĩa key, value ngắn gọn hơn

// var name ='Js';
// var price = 1000;

// var course ={
//     name,
//     price
//     // getName:function(){
//     //     return name ;
       
//     // },
//     // getPrice:function(){
//     //     return price ;
//     // }

// };
// console.log(course);

// console.log(course.getName());

var fieldName ='new name';
var fieldPrice ='price';

let course ={
    name :'Js',
    [fieldName]:'JS',
    [fieldPrice]:1000
};
console.log(course);


// Destructuring / phân rã 
let array = ['js','php','ruby'];

var [a,b,c]=array;

console.log(a,b,c);

//rest parameters

var khoaHoc ={
    names: 'JS',
    price :1000,
    image : 'image -address',
   
};

// var names = khoaHoc.names
// var description = khoaHoc.description || 'defau descript'

var {names,description='defau descript'}=khoaHoc;
console.log(names);
console.log(description);


// function logger(...params){
//     console.log(params);
// }
// let i=logger(1,2,3,4,7,8,9)
// console.log(i);

// tiêp tuc 
// function logger2({namei,price,...rest}){
//     console.log(namei)
//     console.log(price);
//     console.log(rest);
// }
// logger2({
//     namei :'js',
//     price :1000,
//     description :'description content'
// });

// // Spread / nôi mang 
// var array1=['js','rupy','php'];

// var array2=['reactjs','java'];

// var array3 = [...array2,...array1];
// console.log(array3);

// var obj1 = {
//     names : 'js',
// };
// var obj2 ={
//     price:1000
// };
// var obj3 ={
//     ...obj1,
//     ...obj2
// };

// console.log(obj3);

// var defaultConfig ={
//     api : 'http://domain-trang-khoa-hoc',
//     apiVersion :'v1',
//     other : 'other',

// };

// var exerciseConfig = {
//     ...defaultConfig,
//     api : 'http://domain-trang-bai-tap'
// };
// console.log(exerciseConfig);

// var mang =  ['js','php','ruby'];
// function logger3 (...rest) {
//     for (var i=0;i<rest.length; i++) {
//         console.log(rest[i]);
//     }
// }
// logger3(...mang);

// function highlight([first,...string],...values){
//     return values.reduce(
//         (acc,curr)=>[...acc,`<span>${curr}</span>`,string.shift()],
//         [first]
//     )
//     .join('')
// }
// var brand ='f8';
// var course ='js';

// let htmla=highlight`hoc lap trinh ${course} tai ${brand} !`;

// console.log(htmla);


//modules / boc tach 

// import {a} from './logger';

// import logger from './logger';
// console.log( typeof logger);


