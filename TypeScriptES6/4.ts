let getSoMonHoc = (student: any) => {
  return Object.keys(student.monHoc);
};
console.log(
  getSoMonHoc({
    ten: "David Rayy",
    lop: "12A1",
    tuoi: 15,
    monHoc: {
      toan: 8,
      ly: 9,
      hoa: 10,
      sinh: 8,
      su: 5,
      van: 9,
    },
  })
);

// ham forEach
//ham entries
let getMonHoc = (obj: any) => {
  return obj.monHoc.toan;
};
console.log(
  getMonHoc({
    ten: "David Rayy",
    lop: "12A1",
    tuoi: 15,
    monHoc: {
      toan: 8,
      ly: 9,
      hoa: 10,
      sinh: 8,
      su: 5,
      van: 9,
    },
  })
);

let trungBinhMonHoc = (student: any) => {
  let b = Object.entries(student.monHoc);
  console.log(b);

  let tong: number = 0;
  b.forEach((item) => {
    //duyet qua tung phan tu mang
    // tong = tong + item[1];
  });
  return tong / 6;
};
console.log(
  trungBinhMonHoc({
    ten: "David Rayy",
    lop: "12A1",
    tuoi: 15,
    monHoc: {
      toan: 7,
      ly: 9,
      hoa: 6,
      sinh: 8,
      su: 5,
      van: 9,
    },
  })
);

let monDiemCaoNhat = (student: any) => {
  //   Object.entries(student.monHoc).forEach((item) => {
  //   console.log(num);
  // });
  let a = Object.entries(student.monHoc);
  console.log(a);

  let max: number = 0;
  a.forEach((item) => {
    if (item[1] > max) {
      //@ts-ignore
      max = item[1];
    }
  });
  return max;
};
console.log(
  monDiemCaoNhat({
    ten: "David Rayy",
    lop: "12A1",
    tuoi: 15,
    monHoc: {
      toan: 7,
      ly: 9,
      hoa: 6,
      sinh: 8,
      su: 5,
      van: 9,
    },
  })
);
