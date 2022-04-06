var number1 = [1, 2, 3, 4, 6, 8, 9];
var iamSoChan = number1.filter(function (num) {
    return num % 2 == 0;
});
console.log(iamSoChan);
var number2 = [1, 3, 4, 6, 8];
var iamSoChan2 = number2.map(function (num) {
    return num * 9;
});
console.log(iamSoChan2);
var number3 = function (arr) {
    var laKetQua = [];
    laKetQua = arr.filter(function (num) {
        return num % 2 == 0;
    });
    return laKetQua;
};
console.log(number3([2, 4, 6, 7]));
var number = function (arr) {
    var laKetQua = [];
    laKetQua = arr.filter(function (num) {
        return num % 2 == 0;
    });
    return laKetQua;
};
console.log(number([2, 4, 6, 7]));
var motSo = function (arr) {
    var ketQua = [];
    //   khai báo một biến để hứng kết quả trả về
    ketQua = arr.filter(function (num) {
        return num <= 0;
    });
    return ketQua;
};
console.log(motSo([1, -2, 4, -6, 8]));
