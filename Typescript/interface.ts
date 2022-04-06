interface LabelledValue {
  label :string;
  size :number
}
let  printLabe =(labelledObj: LabelledValue )=>{
  return (labelledObj.label);
}
console.log({size:10 , label :"Size 10 Object"});


interface Student {
    ten: string,
    lop: string,
    tuoi: number,
    monHoc: {
      toan: number,
      ly: number,
      hoa: number,
      sinh: number,
      su: number,
      van: number,
    },
}
let getSoMon = (student: Student) => {
    return Object.keys(student.monHoc);
  };
  console.log(
    getSoMon({
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