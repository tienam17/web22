let emailKey = 'email';

let myInfo={
    name :'Tien Nam',
    age :'20',
    address:'TH,VN',
    [emailKey]:'tiennamit2002@gmail',

    getName : function(){
        return this.name ;
    },
    getAge : function(){

    }
};
// function => Phương thức / method
//Othé => Thuộc tính / property


// myInfo.email ='tiennamit2002@gmail.com'; // thêm key
// console.log(myInfo.address); // lấy key 
// console.log(myInfo.getName());

// delete myInfo.age ;
// delete myInfo.name ;
// console.log(myInfo);

/*OBJECT CONSTRUCTOR */ /*OBJECT PROTOTYPE */ // Nguyên mẫu tạo đối tượng

function User (firsName, lastName , avatar){
    this.firsName =firsName;
    this.lastName=lastName;
    this.avatar=avatar;

    this.getName=function (){
        return `${this.firsName} ${this.lastName}`;
    }
}
User.prototype.className ='f12';
User.prototype.getClassName = function(){
    return this.className;
}

let author = new User('Nam', 'Nguyễn ', 'Avatar ');
let user = new User('Vũ','Nguyễn ', 'Avatar');

author.title ='Chia sẽ dạo ';
user.comment ='Liệu có khóa asp.net k ad 🙂'

console.log(author.className);
console.log(user.getClassName());

//Math object 
console.log(Math.PI);// trả về số pi
console.log(Math.round(3.8)); // làm tròn số 
console.log(Math.abs(-2)); // trả về giá trị tuyệt đối 
console.log(Math.ceil(4,1)); // làm tròn trên 
console.log(Math.floor(4,8)) ; // làm tròn dưới 
console.log(Math.random()); // trả về số thập phân < 1

let random =Math.floor(Math.random()*5);
let bonus =[
    '10 coin ',
    '20 coin ',
    '30 coin ',
    '40 coin ',
    '50 coin ',
];
console.log(bonus[random]);
console.log(Math.min(-2,1,2,3,4,5,6,7));// trả về con số bé
console.log(Math.max(-2,1,2,3,4,5,6,7));// trả về con số lớn 