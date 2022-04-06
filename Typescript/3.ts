//các hàm xử lý chuỗi

//ham reverse
let motChuoi = (str: string) => {
  return str.split("").reverse().join("");
};
console.log(motChuoi("hello"));

// ham split
let motMang = (str: string) => {
  return str.split(" ");
};
console.log(motMang("day la 1 string"));

let motChuoi1 = (str: string) => {
  return str.split("").reverse().join("");
};
console.log(motChuoi1("Hello Word and Coders"));

let motChuoi3 = (str: string) => {
  return str.split("").reverse().join("");
};
console.log(motChuoi3("hoc js sieu de"));

// ham toUpperCase
let motChuoi4 = (str: string) => {
  return str.toUpperCase();
};
console.log(motChuoi4("toi la mot developer"));

// ham substring
let motChuoi5 = (str: string) => {
  return str.substring(3);
};
console.log(motChuoi5("</>{#}"));

// viet ham ten capitalize
// hàm charAt để tìm kiếm kí tự trong chuỗi
// hàm toUpperCase chuyển đổi một chuỗi in thường thành in hoa
// hàm silice trích xuất phần tử của mảng

let motChuoi6 = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(motChuoi6("toi la mot developer"));

let motChuoi7 = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};

console.log(motChuoi7("toi muon tro thanh mot lap trinh vien gioi "));

let locUserTheoTuoi = (arr: any[]) => {
  let ketQua: number[] = [];
  ketQua = arr.filter(({ age }) => {
    return age > 18;
  });
  return ketQua;
};
console.log(
  locUserTheoTuoi([
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "join", age: 18 },
    { user: "khan", age: 36 },
    { user: "may", age: 36 },
  ])
);

let locUser = (arr: any[]) => {
  let ketQua: string[] = [];
  ketQua = arr.map(({ user }) => {
    return user;
  });
  return ketQua;
};
console.log(
  locUser([
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "join", age: 18 },
    { user: "khan", age: 36 },
    { user: "may", age: 36 },
  ])
);

let remoter = (id: number, arr: any[]) => {
  return 
};
console.log([
  { id: 1, user: "barney", age: 36 },
  { id: 2, user: "fred", age: 40 },
  { id: 3, user: "join", age: 18 },
  { id: 4, user: "khan", age: 19 },
  { id: 5, user: "may", age: 19 },
]);

interface User {
  id: number; user: string; age: number
}

let remove = (id: number, users: User[]):User[] => {


  return []
}
let users = [
  { id: 1, 'user': 'barney', 'age': 36 },
  { id: 2, 'user': 'fred', 'age': 40 },
  { id: 3, 'user': 'join', 'age': 18 },
  { id: 4, 'user': 'khan', 'age': 19 },
  { id: 5, 'user': 'may', 'age': 19 },
];