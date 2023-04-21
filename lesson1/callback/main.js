function myFunction (param){
    // console.log(typeof param);
    param('Học lập trình ')
}

function myCallback (value){
    console.log('Value:',value);
}
// myCallback(123);
myFunction(myCallback); 
// là hàm , được truyền qua đối số , được gọi lại 

Array.prototype.map2=function(callback){
    let output=[], arayLength =this.length ;

    for (let i=0; i<this.length ;i++){
        let result = callback(this[i],i);
        output.push(result);
    }
    return output
}

let couress =[
    'js',
    'php',
    'java'
];
let htmls=couress.map2(function(course){
    return `<h2>${course}</h2>`;
});

console.log(htmls);
// let htmls=couress.map(function(course){
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join('-'))

Array.prototype.filter2=function(callback){
    let output =[];
    for(let index in this){
        if(this.hasOwnProperty(index)){
            let result =callback(this[index],index,this);
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;

}


let courses =[
    {
        name : 'js',
        coin : 680
    },
    {
        name :'php',
        coin: 860
    },
    {
        name:'ruby',
        coin: 980
    }
];

let filterCourses = courses.filter(function(course, index, array ){
    return course.coin >700;
});
console.log(filterCourses);
