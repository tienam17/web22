var getSoMonHoc = function (student) {
    return Object.keys(student.monHoc);
};
console.log(getSoMonHoc({
    ten: "David Rayy",
    lop: "12A1",
    tuoi: 15,
    monHoc: {
        toan: 8,
        ly: 9,
        hoa: 10,
        sinh: 8,
        su: 5,
        van: 9
    }
}));
// ham forEach
//ham entries
var getMonHoc = function (obj) {
    return obj.monHoc.toan;
};
console.log(getMonHoc({
    ten: "David Rayy",
    lop: "12A1",
    tuoi: 15,
    monHoc: {
        toan: 8,
        ly: 9,
        hoa: 10,
        sinh: 8,
        su: 5,
        van: 9
    }
}));
var trungBinhMonHoc = function (student) {
    var b = Object.entries(student.monHoc);
    console.log(b);
    var tongDiem = 0;
    b.forEach(function (item) {
        //duyet qua tung phan tu mang
        tongDiem += item[1];
    });
    return tongDiem / 6;
};
console.log(trungBinhMonHoc({
    ten: "David Rayy",
    lop: "12A1",
    tuoi: 15,
    monHoc: {
        toan: 7,
        ly: 9,
        hoa: 6,
        sinh: 8,
        su: 5,
        van: 9
    }
}));
var monDiemCaoNhat = function (student) {
    //   Object.entries(student.monHoc).forEach((item) => {
    //   console.log(num);
    // });
    var a = Object.entries(student.monHoc);
    console.log(a);
    var max = 0;
    a.forEach(function (item) {
        if (item[1] > max) {
            //@ts-ignore
            max = item[1];
        }
    });
    return max;
};
console.log(monDiemCaoNhat({
    ten: "David Rayy",
    lop: "12A1",
    tuoi: 15,
    monHoc: {
        toan: 7,
        ly: 9,
        hoa: 6,
        sinh: 8,
        su: 5,
        van: 9
    }
}));
