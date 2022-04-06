let number1 = [1, 2, 3, 4, 6, 8, 9];
let iamSoChan = number1.filter( num=> {
  return num % 2 == 0;
});
console.log(iamSoChan);
let number2 = [1, 3, 4, 6, 8];
let iamSoChan2= number2.map(num => {
  return num *9
});
console.log(iamSoChan2);
let number = (arr: number[]) => {
  let laKetQua: number[] = [];
   laKetQua =arr.filter((num) => {
    return num % 2 == 0;
  });
  return laKetQua;
};
console.log(number([2, 4, 6, 7]));
let number = (arr: number[]) => {
  let laKetQua: number[] = [];
   laKetQua =arr.map((num) => {
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
