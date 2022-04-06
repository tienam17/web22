var isDone = false;
console.log(isDone);
var decinal = 2;
console.log(decinal);
var color = "gray";
console.log(color);
var fullname = "Nam";
var age = 5;
var sentense = "\n Hello Ts " + fullname + ".Hoc Ts " + (age + 1) + "\n";
console.log(sentense);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["black"] = 2] = "black";
})(Color || (Color = {}));
;
var i = Color.blue;
console.log(i);
