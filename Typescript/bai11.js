var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log(arguments.length);
};
var message = "Hellow";
displayColors(message, 'red');
displayColors(message, 'gray', 'blue');
displayColors(message, 'gray', 'blue', 'black');
