var getSoMon = function (student) {
    return Object.keys(student.monHoc);
};
console.log(getSoMon({
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
