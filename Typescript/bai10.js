var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value + 0.1; }
    if (salary === void 0) { salary = 10; }
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus();
getBonus(20, 40);
getBonus(20, 40, 10);
