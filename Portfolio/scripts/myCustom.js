//Arithmetic
function small(array) {
    let x = array[0];
    for (let y of array) {
        if (y < x) {
            x = y;
        };
    };
    return x;
};
function big(array) {
    let x = array[0];
    for (let y of array) {
        if (y > x) {
            x = y;
        };
    };
    return x;
};
function avg(array) {
    let count = array.length;
    let add = sum(array);
    return add / count;
};
function sum(array) {
    let x = 0;
    for (let i of array) {
        x += i;
    };
    return x;
};
function prod(array) {
    let x = 1;
    for (let i of array) {
        x *= i;
    };
    return x;
};
$("#doMath").click(function () {
    let numArray = [];

    numArray[0] = Number($("#input1").val());
    numArray[1] = Number($("#input2").val());
    numArray[2] = Number($("#input3").val());
    numArray[3] = Number($("#input4").val());
    numArray[4] = Number($("#input5").val());

    $("#smallOutput").text(`The smallest of your numbers is ${small(numArray)}.`);
    $("#bigOutput").text(`The largest of your numbers is ${big(numArray)}.`);
    $("#avgOutput").text(`The mean of your numbers is ${avg(numArray)}.`);
    $("#sumOutput").text(`The sum of your numbers is ${sum(numArray)}.`);
    $("#prodOutput").text(`The product of your numbers is ${prod(numArray)}.`);
});

//Factorial
$("#doMathFact").click(function () {
    let factNum = Number($("#inputFact").val());

    function fact(x) {
        if (x === 1 || x === 0) {
            return 1;
        } for (let i = 2; i <= x - 1; i++) {
            factNum *= i;
        };
        return factNum;
    };

    $("#factOutput").text(`The factorial of your number is ${fact(factNum)}.`);
});

//FizzBuzz