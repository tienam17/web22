interface Person {
    fname :string,
    lname : string,
    age :number,
}
let p1 :Person ={
    fname :"Nam",
    lname :"TS",
    age : 2
}
let p2 :Person ={
    fname :"Nam2",
    lname :"TS2",
    age : 2
}

interface LabelledValue {
    label :string;
}
function printLabel(labelledObj: LabelledValue ) {
    console.log(labelledObj.label);
}
let myObj ={size:10 , label :"Size 10 Object"};
printLabel(myObj);

