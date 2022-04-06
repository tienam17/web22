//các hàm xử lý chuỗi
//ham reverse
var motChuoi = function (str) {
    return str.split("").reverse().join("");
};
console.log(motChuoi("hello"));
// ham split
var motMang = function (str) {
    return str.split(" ");
};
console.log(motMang("day la 1 string"));
var motChuoi1 = function (str) {
    return str.split("").reverse().join("");
};
console.log(motChuoi1("Hello Word and Coders"));
var motChuoi3 = function (str) {
    return str.split("").reverse().join("");
};
console.log(motChuoi3("hoc js sieu de"));
// ham toUpperCase
var motChuoi4 = function (str) {
    return str.toUpperCase();
};
console.log(motChuoi4("toi la mot developer"));
// ham substring
var motChuoi5 = function (str) {
    return str.substring(3);
};
console.log(motChuoi5("</>{#}"));
// viet ham ten capitalize
// hàm charAt để tìm kiếm kí tự trong chuỗi
// hàm toUpperCase chuyển đổi một chuỗi in thường thành in hoa
// hàm silice trích xuất phần tử của mảng
var motChuoi6 = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(motChuoi6("toi la mot developer"));
var motChuoi7 = function (str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(function (str) { return str.charAt(0).toUpperCase() + str.slice(1); })
        .join(" ");
};
console.log(motChuoi7("toi muon tro thanh mot lap trinh vien gioi "));
var locUserTheoTuoi = function (arr) {
    var ketQua = [];
    ketQua = arr.filter(function (_a) {
        var age = _a.age;
        return age > 18;
    });
    return ketQua;
};
console.log(locUserTheoTuoi([
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "join", age: 18 },
    { user: "khan", age: 36 },
    { user: "may", age: 36 },
]));
var locUser = function (arr) {
    var ketQua = [];
    ketQua = arr.map(function (_a) {
        var user = _a.user;
        return user;
    });
    return ketQua;
};
console.log(locUser([
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "join", age: 18 },
    { user: "khan", age: 36 },
    { user: "may", age: 36 },
]));
var remoter = function (id, arr) {
    return;
};
console.log([
    { id: 1, user: "barney", age: 36 },
    { id: 2, user: "fred", age: 40 },
    { id: 3, user: "join", age: 18 },
    { id: 4, user: "khan", age: 19 },
    { id: 5, user: "may", age: 19 },
]);
var remove = function (id, users) {
    return [];
};
var users = [
    { id: 1, 'user': 'barney', 'age': 36 },
    { id: 2, 'user': 'fred', 'age': 40 },
    { id: 3, 'user': 'join', 'age': 18 },
    { id: 4, 'user': 'khan', 'age': 19 },
    { id: 5, 'user': 'may', 'age': 19 },
];
